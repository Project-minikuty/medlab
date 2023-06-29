// eslint-disable-next-line
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  Avatar,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  AddUserButton
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-react";
import { chatInitialize, getZim } from "./chatLogic";
import { useEffect, useState } from "react";

function ChatPage() {
  const [messageInputValue, setMessageInputValue] = useState("");
  const [convo, setConvo] = useState({
    name: "",
    username: "",
    avtr: "",
    conversationID: "",
  });
  const [convoList, setConvoList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    getConvo();

    async function getConvo() {
      await chatInitialize();
      var zim = getZim();
      var convoList = await zim.queryConversationList({ count: 30 });
      console.log(convoList.conversationList);
      zim.on(
        "receivePeerMessage",
        async function ( { message, fromConversationID }) {
          convoList = await zim.queryConversationList({ count: 30 });
          setConvoList(convoList.conversationList);
          setConvo({...convo});
        }
      );
      setConvoList(convoList.conversationList);
    }
  }, []);
  useEffect(() => {
    var zim = getZim();
    zim.sendMessage({ type: 1, message: messageInputValue}, convo.conversationID,0,{ 
      priority: 1,  
  })
    .then(function ({ message }) {
        // c
        sM(message);
    })
    .catch(function (err) {
      console.log(err);
        // Failed to send message.
    });

    async function sM(message) {
      setConvo({ ...convo });
      var convoList = await zim.queryConversationList({ count: 30 });
      setConvoList(convoList.conversationList);
      console.log(message);
    }
  }, [messageInputValue]);
  useEffect(() => {
    convo.selected && getMessage();

    async function getMessage() {
      var zim = getZim();
      var mL = await zim.queryHistoryMessage(convo.conversationID, 0, {
        count: 100,
      });
      setMessageList(mL.messageList);
    }
  }, [convo]);
  return (
    <div
      style={{
        height: "600px",
        position: "relative",
      }}
    >
      <MainContainer>
        <Sidebar position="left" scrollable={false}>
          <div className="d-flex"><Search placeholder="Search..." />
          <AddUserButton onClick={}/></div>
          <ConversationList>
            {convoList.map((c) => (
              <Conversation
                name={c.conversationName}
                lastSenderName={
                  c.lastMessage.direction === 0 ? "( sent )" : "( received )"
                }
                info={c.lastMessage.message || c.lastMessage.fileName}
                onClick={() => {
                  setConvo({
                    name: c.conversationName,
                    username: c.conversationID,
                    avtr: c.conversationAvatarUrl,
                    conversationID: c.conversationID,
                    selected: true
                  });
                }}
              >
                <Avatar src={c.conversationAvatarUrl} />
              </Conversation>
            ))}
          </ConversationList>
          
        </Sidebar>

        {convo.selected && (
          <ChatContainer>
            <ConversationHeader>
              <ConversationHeader.Back onClick={()=>{setConvo({
    name: "",
    username: "",
    avtr: "",
    conversationID: "",
  })}}/>
              <Avatar src={convo.avtr} name="Zoe" />
              <ConversationHeader.Content
                userName={convo.name}
                info="Active 10 mins ago"
              />
              <ConversationHeader.Actions>
                <VoiceCallButton />
                <VideoCallButton />
              </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList>
              {messageList.map((c) => (
                <Message
                  model={{
                    message: c.message || c.fileName,
                    sentTime: String(c.timestamp),
                    sender: c.senderUserID,
                    direction: c.direction === 0 ? "outgoing" : "incoming",
                    position: "single",
                  }}
                ></Message>
              ))}

              {/*<Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "first",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "normal",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "normal",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "last",
                  }}
                >
                  <Avatar src={avtr} name="Zoe" />
                </Message>
                 */}
            </MessageList>
            <MessageInput
              placeholder="Type message here"
              onSend={(e) => {
                setMessageInputValue(e);
              }}
            />
          </ChatContainer>
        )}
      </MainContainer>
    </div>
  );
}
export default ChatPage;
