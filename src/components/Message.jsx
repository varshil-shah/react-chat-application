import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  const isMe = message.senderId === currentUser.uid;

  useEffect(() => {
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  }, [message]);

  return (
    <div className={`message ${isMe ? "owner" : ""}`} ref={ref}>
      <div className="messageInfo">
        <img
          src={isMe ? currentUser.photoURL : data.user.photoURL}
          alt="user-pic"
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="message-pic" />}
      </div>
    </div>
  );
};

export default Message;
