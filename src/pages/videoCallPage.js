import React from "react";
import VideoCall from "../components/videoCall";
import BrandNav from "../components/BrandNav";

function VideoCallPage() {
  const userName=localStorage.getItem('username');
  const name = localStorage.getItem('name');
  const roomID = localStorage.getItem('roomID');
    return (
      <div >
        <BrandNav />
        <VideoCall roomID={roomID} userID={userName} userName={name}/>
      </div>
    );
  }

  export default VideoCallPage;