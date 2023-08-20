import React, { useState } from "react";
import Friend from "./Friend";

const FriendList = ({ friends, handleSetSelectedFriend,selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          handleSetSelectedFriend={handleSetSelectedFriend}
          friend={friend}
          selectedFriend={selectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendList;
