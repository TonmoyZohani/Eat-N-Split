import React from "react";

const Button = ({ children, handleShowFriend }) => {
  return (
    <button onClick={() => handleShowFriend()} className="button">
      {children}
    </button>
  );
};

export default Button;
