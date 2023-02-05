import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
          alt="user-pic"
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello World</p>
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
          alt="message-pic"
        />
      </div>
    </div>
  );
};

export default Message;
