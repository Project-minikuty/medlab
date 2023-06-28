import React from "react";
import VideoCall from "../components/videoCall";
import BrandNav from "../components/BrandNav";

function VideoCallPage() {
  const userName=localStorage.getItem('username');
  const name = localStorage.getItem('name');
    return (
      <div >
        <BrandNav />
        <VideoCall roomID="newRoom" userID={userName} userName={name}/>
      </div>
    );
  }

  export default VideoCallPage;