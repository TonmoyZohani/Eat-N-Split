import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  console.log(selectedFriend);

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend?.name}</h2>

      <label>Bill Value</label>
      <input
        value={bill}
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your Expense</label>
      <input
        value={paidByUser}
        type="text"
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>{selectedFriend?.name} Expense</label>
      <input type="text" value={paidByFriend} disabled />

      <label>Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
