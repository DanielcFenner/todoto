import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Lists from "./components/Lists";
import Footer from "./components/Footer";

function App() {
  const [lists, setLists] = React.useState(defaultValue());
  const [scene, setScene] = React.useState("lists");
  const [currentList, setCurrentList] = React.useState("Groceries");

  React.useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  function defaultValue() {
    const saved = localStorage.getItem("lists");
    const initialValue = JSON.parse(saved);
    return initialValue || {};
  }

  function genId() {
    return Math.floor(Math.random() * 9999999999999);
  }

  function addListItem(value) {
    setLists((oldLists) => {
      let newLists = { ...oldLists };
      newLists[currentList].push({
        id: genId(),
        name: value,
      });
      return newLists;
    });
  }

  function removeListItem(id) {
    setLists((oldLists) => {
      let newLists = { ...oldLists };
      for (let i = 0; i < newLists[currentList].length; i++) {
        const listItem = newLists[currentList][i];
        if (listItem.id === id) {
          newLists[currentList].splice(i, 1);
        }
      }

      return newLists;
    });
  }

  function addList(value) {
    setLists((oldLists) => {
      let newLists = { ...oldLists };
      newLists[value] = [];

      return newLists;
    });
  }

  function removeList(value) {
    setLists((oldLists) => {
      let newLists = { ...oldLists };
      delete newLists[value];

      return newLists;
    });
  }

  return (
    <div className="wrapper">
      <Header />
      {scene === "list" && (
        <List
          lists={lists}
          currentList={currentList}
          setScene={setScene}
          addListItem={addListItem}
          removeListItem={removeListItem}
        />
      )}

      {scene === "lists" && (
        <Lists
          lists={lists}
          setCurrentList={setCurrentList}
          setScene={setScene}
          addList={addList}
          removeList={removeList}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
