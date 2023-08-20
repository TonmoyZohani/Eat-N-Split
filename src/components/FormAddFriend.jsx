import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ showAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: encodeURIComponent(`${image}?=${id}`),
      balance: 0,
    };

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
