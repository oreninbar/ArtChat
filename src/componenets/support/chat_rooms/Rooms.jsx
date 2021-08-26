import React from "react";
import { inject, observer } from "mobx-react";
import User from "./user_in_chat/User";
import "../../../css/rooms.css";

const Rooms = inject("chat_store")(
  observer((props) =>
   {
    return (<div className="rooms-container">
      {props.chatList.map((c,key)=><User key={key} chat={c} openChat={props.openChat}/>)}
    </div>);
  })
);

export default Rooms;
