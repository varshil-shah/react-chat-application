import React from "react";

import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="file-picker-img" />
        <input type="file" id="msg-file" style={{ display: "none" }} />
        <label htmlFor="msg-file">
          <img src={Img} alt="img-picker" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
