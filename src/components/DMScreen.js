import React from 'react';
import './DMScreen.css';

// Integrate the SDK
import { ZIMKitManager, Common } from '@zegocloud/zimkit-react';
import '@zegocloud/zimkit-react/index.css';

// The following uses the App instance as an example.
export default class DMScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            appConfig: {
                appID: parseInt(process.env.REACT_APP_Zego_appId),       
                serverSecret: process.env.REACT_APP_Zego_server_secret 
            },
            userInfo: {
                // Your ID as a user.
                userID: localStorage.getItem('username'),
                // Your name as a user.
                userName: localStorage.getItem('name'),
                // The image you set as a user avatar must be network images. e.g., https://storage.zego.im/IMKit/avatar/avatar-0.png
                userAvatarUrl: 'https://storage.zego.im/IMKit/avatar/avatar-0.png'
            },
        }
    }
    async componentDidMount() {
        const zimKit = new ZIMKitManager();
        const token = zimKit.generateKitTokenForTest(this.state.appConfig.appID, this.state.appConfig.serverSecret, this.state.userInfo.userID);
        await zimKit.init(this.state.appConfig.appID);
        await zimKit.connectUser(this.state.userInfo, token);
    }
    render() {
        return (
            <div ><Common></Common> </div>
            
        );
    }
}