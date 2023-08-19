import React from "react";

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>Bill Value</label>
      <input type="text" />

      <label>Your Expense</label>
      <input type="text" />

      <label>X's Expense</label>
      <input type="text" />

      <label>Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
