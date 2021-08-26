import React, { useState, useEffect } from "react";
import Rooms from "./chat_rooms/Rooms";
import Chat from "./chat/Chat";
import "../../css/support.css";

export default function Support() {
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState([]);

  useEffect(async () => {

  }, []);

  const openChat = async (chatId) => {

  };
  


  return (
    <div className="support-container">
      <div className="rooms-wrapper">
        <Rooms chatList={chatList} openChat={openChat} />
      </div>
      <div className="support-chat-wrapper">
        <Chat chat={chat} user={'support'}  />
      </div>
    </div>
  );
}
