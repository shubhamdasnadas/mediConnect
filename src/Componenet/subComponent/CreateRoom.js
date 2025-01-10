// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const CreateRoom = () => {
//   const navigate = useNavigate();

//   const createRoom = () => {
//     const roomId = Math.random().toString(36).substring(2, 10); // Generate random room ID
//     navigate(`/room/${roomId}`); // Redirect to the room page
//   };

//   return (
//     <div>
//       <button onClick={createRoom}>Create Room</button>
//     </div>
//   );
// };

// export default CreateRoom;

import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreateRoom = () => {
    const [roomId, setRoomId] = useState(""); 
    const navigate = useNavigate();
    const generateRoomId = () =>{
      const randomID = Math.random().toString(36).substring(2, 9);
      const timestamp = Date.now().toString().substring(-4);
      setRoomId(randomID + timestamp);
    }

    const handleOneAndOneCall = () => {
      if(!roomId){
        alert("Please generate room id first");
        return;
      }
      navigate(`/room/${roomId}?type=one-on-one`)
    };

    const handleGroupCall = () =>{
      if(!roomId){
        alert("Please generate room id first");
        return;
      }
      navigate(`/room/${roomId}?type=group-call`);
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <h1>Start a video call with a randomly generated room id</h1>
            </div>
            <div className=' mt-2 d-flex align-item-center justify-content-center'>
                <Input placeholder='Room ID' className='w-25'value={roomId} readOnly/>
                <Button style={{ fontSize: "15px" }} className='btn-primary' onClick={generateRoomId}>Generate ID</Button>
            </div>
            <div className='mt-3 d-flex align-item-center justify-content-center'>
                <Button style={{ fontSize: "15px" }} className='btn-primary' disabled={!roomId} onClick={handleOneAndOneCall}>One-on-One Call</Button>
                <Button style={{ fontSize: "15px" }} className='btn-primary' disabled={!roomId} onClick={handleGroupCall}>Group Call</Button>
            </div>
        </div>
    );
};

export default CreateRoom;