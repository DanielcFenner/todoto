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
  for (let list in lists) {
    listsElement.push(
      <div
        key={list}
        className="lists--itemContainer"
        onClick={() => listAndScene(list)}
      >
        <div className="lists--item">
          <p>{list}</p>
        </div>
        <i className="bi bi-trash3" id={list} onClick={handleRemoveList}></i>
      </div>
    );
  }

  function handleAddList(e) {
    e.preventDefault();
    addList(formValue);
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
        "You don't have any lists yet, go ahead and add one"
      )}
    </main>
  );
}
