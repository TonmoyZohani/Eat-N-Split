import React from "react";

const Button = ({ children, handleShowFriend }) => {
  return (
    <button type="submit" onClick={() => handleShowFriend()} className="button">
      {children}
    </button>
  );
};

export default Button;
