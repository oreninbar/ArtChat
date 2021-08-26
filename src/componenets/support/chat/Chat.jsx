import React, { useEffect, useRef, useState } from "react";
import "../../../css/chats.css";
import { inject, observer } from "mobx-react";
import io from "socket.io-client";
import Message from "./messages/Message";
let userName = "User" + parseInt(Math.random() * 10);
const room=userName;
const socket = io.connect("http://localhost:5050");
const Chat = inject("chat_store")(
  observer((props) => {
    const [message, setMessage] = useState("");
    const [chatMessages, setchatMessages] = useState([""]);
    
    userName=props.user==='support'? 'Artbot' : userName

    useEffect(() => {
      try {
        if (props.user === "customer") {
          const timer = setTimeout(() => {
            setchatMessages([
              ...chatMessages,
              { userName: "Artbot", message: "Hi, how can I help you?" },
            ]);
          }, 700);
          return () => clearTimeout(timer);
        }
      } catch (err) {
        console.error("problem with the socket", err);
      }
    }, []);

    useEffect(() => {
      console.log(socket);
      socket.on("message", (message) => {
        setchatMessages([...chatMessages, message]);
      });
      return;
    }, [chatMessages]);

    function handleInput(e) {
      setMessage(e.target.value);
    }

    function sendMessage(e) {
      e.preventDefault();
      socket.emit("message", { userName, message, room });
      setMessage("");
    }
    return (
      <div className="chat-container">
        <div className="chat-header">
          <div className="user-name">
            <h1 className="name">{"xcxcx"}</h1>
          </div>
          <i className="fas fa-times-circle"></i>
        </div>
        <div className="chat-messages">
          {chatMessages.map(
            (m, key) =>
              m && (
                <Message
                  key={key}
                  userName={m.userName}
                  message={m.message}
                  sender={props.user}
                />
              )
          )}
        </div>
        <div className="chat-input">
          <input
            type="text"
            className="input"
            placeholder="enter a number"
            name="name"
            value={message}
            onChange={handleInput}
          />
          <div type="submit" className="input-btn" onClick={sendMessage}>
            send
          </div>
        </div>
      </div>
    );
  })
);

export default Chat;
