import React, { useState, useEffect } from "react";
import "../../css/customer.css";
import Chat from "../support/chat/Chat";
import ChatIcon from "../../img/chat.png";
import CloseIcon from "../../img/cancel.png";



export default function Customer() {
  const [chatOpen, setChatOpen] = useState(false);


  const openChat = async () => {
    chatOpen ? setChatOpen(false) : setChatOpen(true);
  };

  
  return (
    <div className="customer-container">
      <img
        className={`chat-icon ${chatOpen}`}
        src={ChatIcon}
        alt="chat icon"
        onClick={openChat}
      />
      <div className={`customer-chat-wrapper ${chatOpen}`}>
        <img
          src={CloseIcon}
          alt="close-icon"
          className="close-icon"
          onClick={openChat}
        />
        {chatOpen && <Chat user={'customer'}/>}
      </div>
    </div>
  );
}
