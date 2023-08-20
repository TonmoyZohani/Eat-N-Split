import { useState } from "react";
import FriendList from "./components/FriendList";
import "./App.css";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowFriend = () => {
    console.log(showAddFriend)
    setShowAddFriend(!showAddFriend);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend showAddFriend={showAddFriend} />
        <Button handleShowFriend={handleShowFriend}>
          {" "}
          {showAddFriend === false ? "Add Friend" : "Close"}{" "}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
