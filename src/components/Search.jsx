import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search user..." />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
          alt="user-img"
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
