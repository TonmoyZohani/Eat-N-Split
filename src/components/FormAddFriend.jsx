import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ handleSetNewFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    handleSetNewFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");

    console.log(newFriend);
  };

  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>Friend Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />

        <label>Image Url</label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
        />

        <Button>Add</Button>
      </form>
    </>
  );
};

export default FormAddFriend;
