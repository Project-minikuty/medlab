import React from "react";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';



export default function VideoCall({roomID,userID,userName}) {
let myMeeting = async (element) => {
  
 // generate Kit Token
 const appID = parseInt(process.env.REACT_APP_Zego_appId);
 const serverSecret = process.env.REACT_APP_Zego_server_secret;
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  userID,  userName);

 // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 // start the call
 zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
   });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}