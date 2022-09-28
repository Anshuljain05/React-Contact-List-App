import React from "react";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.phone.value);
    evt.target.name.value = "";
    evt.target.phone.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add Contact</h3>
      <input placeholder="Name" name="name" />
      <input placeholder="Phone" name="phone" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};
