import { ZIM } from 'zego-zim-web';
import CryptoJS from 'crypto-js';
import { randomavtr } from './DMScreen';

var appID = parseInt(process.env.REACT_APP_Zego_appId); // Note: the appID is a set of numbers, not a String. 
// The [create] method creates a ZIM instance only on the first call. Any subsequent calls return null.
ZIM.create({ appID });
// Get the instance via [getInstance] to avoid hot updates that cause you to use the [create] method multiple times to create a singleton and return null.
export var zim = ZIM.getInstance();

// Set up and listen for the callback for receiving error codes. 
zim.on('error', function (zim, errorInfo) {
    console.log('error', errorInfo.code, errorInfo.message);
});

// Set up and listen for the callback for connection status changes.
zim.on('connectionStateChanged', function (zim, { state, event, extendedData }) {
    console.log('connectionStateChanged', state, event, extendedData);
    // When SDK logout occurred due to a long-time network disconnection, you will need to log in again. 
    if (state === 0 && event === 3) {
        zim.login(userInfo, token)
    }
});

// Set up and listen for the callback for receiving one-to-one messages. 
zim.on('receivePeerMessage', function (zim, { messageList, fromConversationID }) {
    console.log('receivePeerMessage', messageList, fromConversationID);
});

// Set up and listen for the callback for token expires.
zim.on('tokenWillExpire', function (zim, { second }) {
    console.log('tokenWillExpire', second);
    // You can call the renewToken method to renew the token. 
    // To generate a new Token, refer to the Prerequisites.
    zim.renewToken(token)
        .then(function({ token }){
            // Renewed successfully.
        })
        .catch(function(err){
            // Renew failed.
        })
});

var appConfig = {
    appID: parseInt(process.env.REACT_APP_Zego_appId), // The Token you get from your app server. 
    serverSecret: process.env.REACT_APP_Zego_server_secret, // The ServerSecret you get from in the ZEGOCLOUD admin console.
};


function generateToken(userID, seconds) {
    if (!userID) return '';

    // Construct the data to be encrypted
    var time = (Date.now() / 1000) | 0;
    var body = {
        app_id: appConfig.appID,
        user_id: userID,
        nonce: (Math.random() * 2147483647) | 0,
        ctime: time,
        expire: time + (seconds || 7200),
    };
    // Encrypt the body
    var key = CryptoJS.enc.Utf8.parse(appConfig.serverSecret);
    var iv = Math.random().toString().substr(2, 16);
    if (iv.length < 16) iv += iv.substr(0, 16 - iv.length);

    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(body), key, { iv: CryptoJS.enc.Utf8.parse(iv) }).toString();
    var ciphert = Uint8Array.from(Array.from(atob(ciphertext)).map((val) => val.charCodeAt(0)));
    var len_ciphert = ciphert.length;

    // Create the Token.
    var uint8 = new Uint8Array(8 + 2 + 16 + 2 + len_ciphert);
    // expire: 8
    uint8.set([0, 0, 0, 0]);
    uint8.set(new Uint8Array(Int32Array.from([body.expire]).buffer).reverse(), 4);
    // iv length: 2
    uint8[8] = 16 >> 8;
    uint8[9] = 16 - (uint8[8] << 8);
    // iv: 16
    uint8.set(Uint8Array.from(Array.from(iv).map((val) => val.charCodeAt(0))), 10);
    // The length of the ciphertext: 2
    uint8[26] = len_ciphert >> 8;
    uint8[27] = len_ciphert - (uint8[26] << 8);
    // Ciphertext
    uint8.set(ciphert, 28);

    var token = `04${btoa(String.fromCharCode(...Array.from(uint8)))}`;
    console.log('generateToken', iv.length, body, token);

    return token;
}


var userInfo;
var token;
export async function chatInitialize() {
    userInfo = { userID: localStorage.getItem('username'), userName: localStorage.getItem('name') };
    token = generateToken(localStorage.getItem('username'),300);
    var err = await zim.login(userInfo, token );
        if(err){
            console.log("login unsuccessfull");
            // Login failed.
        }else{
            
            console.log("login successfull");
            // Login successful.
        }
}

export function getZim(){
    return zim;
} 