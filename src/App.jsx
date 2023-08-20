import { useState } from "react";
import FriendList from "./components/FriendList";
import "./App.css";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend,setSelectedFriend] = useState(null)

  const handleSetNewFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  const handleShowFriend = () => {
    console.log(showAddFriend);
    setShowAddFriend(!showAddFriend);
  };

  const handleSetSelectedFriend =(id)=>{
    console.log(id)
    setSelectedFriend(id)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends}  handleSetSelectedFriend={handleSetSelectedFriend} selectedFriend={selectedFriend}/>
        {showAddFriend && (
          <FormAddFriend handleSetNewFriend={handleSetNewFriend} />
        )}

        <Button handleShowFriend={handleShowFriend}>
          {" "}
          {showAddFriend === false ? "Add Friend" : "Close"}{" "}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill />}
    </div>
  );
}

export default App;
