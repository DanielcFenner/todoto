import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./Lists.css";

export default function Lists({
  lists,
  setCurrentList,
  setScene,
  addList,
  removeList,
}) {
  const [formValue, setFormValue] = React.useState("");

  function handleChange(e) {
    const { value } = e.target;

    setFormValue(value);
  }

  function listAndScene(list) {
    setCurrentList(list);
    setScene("list");
  }

  const listsElement = [];
  for (let [list, listItems] of Object.entries(lists)) {
    listsElement.push(
      <div
        key={list}
        className="lists--itemContainer"
        onClick={() => listAndScene(list)}
      >
        <div className="lists--item">
          <p>{list}</p>
          <div className="lists--amount">{listItems.length} items</div>
        </div>
        <i className="bi bi-trash3" id={list} onClick={handleRemoveList}></i>
      </div>
    );
  }

  function handleAddList(e) {
    e.preventDefault();
    if (
      formValue.length === 0 ||
      formValue.length > 30 ||
      listExistBool(formValue)
    ) {
      return;
    }
    addList(formValue.toUpperCase());
    setFormValue("");
  }

  function listExistBool(value) {
    let bool = false;
    for (let list in lists) {
      if (value.toUpperCase() === list.toUpperCase()) {
        bool = true;
      }
    }
    return bool;
  }

  function handleRemoveList(e) {
    e.stopPropagation();
    removeList(e.target.id);
  }

  return (
    <main className="lists--container">
      <h4>Your lists</h4>
      <form className="list--form">
        <input
          type="text"
          placeholder="Movies to watch"
          onChange={handleChange}
          value={formValue}
        ></input>
        <button className="list--formSubmit" onClick={handleAddList}>
          + LIST
        </button>
      </form>
      {Object.keys(lists).length ? (
        <div className="lists-containerContainer">{listsElement} </div>
      ) : (
        "You don't have any lists yet, add one to get started!"
      )}
    </main>
  );
}
