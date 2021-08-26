import React, {useEffect} from "react";
import "../../../../css/user.css";
// import {Person2} from './p2.png'

export default function User(props) {
  useEffect(async() => {
  });


  return (   

    <div className="user-container" onClick={()=> props.openChat(props.chat.chatId)} >
      <div className="name">
        <h2 className="user-name">{props.chat.chatId}</h2>
      </div>
      <div className="img-wrapper">
        {/* <img src={props.img} alt="Person1" className="user-img" /> */}
        {/* <i class="far fa-comment-dots"></i> */}
      </div>
    </div>
  );
}
