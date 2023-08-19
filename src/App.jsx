import { useState } from "react";
import FriendList from "./components/FriendList";
import "./App.css";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
