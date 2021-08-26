import React from "react";
import "../../../../css/message.css";
import Img from "../../../../img/p.png";

const Message = (props) => {
  return (
    <div
      className={`message-wrapper ${
        props.userName === "Artbot" && props.sender === "customer"
          ? "right"
          : props.userName === "Artbot" && props.sender === "support" ? null 
          : props.userName!=='Artbot' && props.sender==="customer" ? null
          : props.userName!=='Artbot' && props.sender==="support" ? 'right':
          null
      }`}
    >
      <div className="message-img">
        {props.userName === "Artbot" ? (
          <img src={Img} alt="user" className="chat-img" />
        ) : (
          <h1>{props.userName}</h1>
        )}

        <div className="text-message-wrapper">
          <h2 className="chat-text-message">{props.message}</h2>
        </div>
      </div>
      <div className="message-time">{`00:22`}</div>
    </div>
  );
};

export default Message;
