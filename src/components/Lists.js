import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./Lists.css";

export default function Lists({ lists, setCurrentList, setScene }) {
  function listAndScene(list) {
    setCurrentList(list);
    setScene("list");
  }

  const listsElement = [];
  for (let list in lists) {
    listsElement.push(
      <div
        key={list}
        className="lists--item"
        onClick={() => listAndScene(list)}
      >
        {list}
        <i className="bi bi-arrow-right"></i>
      </div>
    );
  }

  return (
    <main className="lists--container">
      <h4>Your lists</h4>
      <div className="lists-containerContainer">{listsElement}</div>
    </main>
  );
}
