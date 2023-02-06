import React, { useContext, useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { capitalizeFirstLetter } from "../utils/utils";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        console.log(doc.data());
        setChats(doc.data());
      });

      return unsub;
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);

  console.log(Object.entries(chats));

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="user-img" />
          <div className="userChatInfo">
            <span>{capitalizeFirstLetter(chat[1].userInfo.displayName)}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
