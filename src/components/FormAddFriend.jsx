import React from 'react'
import Button from './Button';

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>Friend Name</label>
      <input type="text" />

      <label>Image Url</label>
      <input type="text" />

      <Button>Add Friend</Button>

    </form>
  );
}

export default FormAddFriend
