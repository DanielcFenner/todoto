import React from "react";
import "./List.css";

export default function List({ lists, currentList, setScene, addListItem }) {
  const [formValue, setFormValue] = React.useState("");

  const list = lists[currentList];
  const renderList = list.map((listItem) => {
    return (
      <div key={listItem.id} className="list--item">
        <div className="list--itemTick"></div>
        <p>{listItem.name}</p>
      </div>
    );
  });

  function handleAddListItem(e) {
    e.preventDefault();
    addListItem();
  }

  return (
    <main className="list--container">
      <div className="list--titlearea">
        <button className="list--backButton" onClick={() => setScene("lists")}>
          <i className="bi bi-caret-left-fill"></i>
        </button>
        <h4>{currentList}</h4>
      </div>
      <form className="list--form">
        <input type="text" placeholder="Get Tacos"></input>
        <button className="list--formSubmit" onClick={handleAddListItem}>
          + TODO
        </button>
      </form>
      <div className="list">{renderList}</div>
    </main>
  );
}
