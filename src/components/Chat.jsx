import React from "react";
import Messages from "./Messages";
import Input from "./Input";

import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="camera-img" />
          <img src={Add} alt="add-user-img" />
          <img src={More} alt="more-options-img" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
