import React from "react";
import Button from "./Button";

const Friend = ({ friend, handleSetSelectedFriend,selectedFriend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      ) : friend.balance === 0 ? (
        <p>You and your friend {friend.name} are even</p>
      ) : (
        ""
      )}

      {console.log(friend.id)}

      <button onClick={() => handleSetSelectedFriend(friend.id)}> {selectedFriend ? "Cancel":"Select"}</button>
    </li>
  );
};

export default Friend;
