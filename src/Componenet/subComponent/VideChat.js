import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SECRETE_KEY } from '../../config';

const VideoChat = () => {
  const { roomId } = useParams();
  const videoContainerRef = useRef(null);

  const myMeeting = () => {
    const appID = APP_ID;
    const serverSecret = SECRETE_KEY;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Your Name"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: videoContainerRef.current,
      sharedLinks: [
        {
          name: "Personal link",
          url: window.location.protocol + "//" + window.location.host + window.location.pathname,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
        chatEnabled:true
      }

    });
  };

  useEffect(() => {
    myMeeting();
  }, [roomId]); // Add roomId as a dependency in case the room changes

  return (
    <div ref={videoContainerRef} style={{width:"100%", height:"100%"}}></div>
  );
};

export default VideoChat;
