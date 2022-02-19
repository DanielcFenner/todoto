import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Lists from "./components/Lists";

const fakeData = {
  Groceries: [
    {
      id: 12421239123,
      name: "Broccoli",
    },
    {
      id: 12345239123,
      name: "Blueberries",
    },
    {
      id: 12399939123,
      name: "Bananas",
    },
  ],
  Chores: [
    {
      id: 12391200123,
      name: "Dishes",
    },
    {
      id: 12392239123,
      name: "Laundry",
    },
  ],
  Games: [
    {
      id: 12392139123,
      name: "Lost Ark",
    },
    {
      id: 12391293123,
      name: "Overwatch",
    },
    {
      id: 12391261123,
      name: "Valorant",
    },
  ],
};

function App() {
  const [lists, setLists] = React.useState(fakeData);
  const [scene, setScene] = React.useState("list");
  const [currentList, setCurrentList] = React.useState("Groceries");

  function genId() {
    return Math.floor(Math.random() * 99999999999999);
  }

  function addListItem(value) {
    setLists((oldLists) => {
      let newList = { ...lists };
      newList.currentList.push({
        id: genId(),
        name: value,
      });
      return newList;
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
        />
      )}

      {scene === "lists" && (
        <Lists
          lists={lists}
          setCurrentList={setCurrentList}
          setScene={setScene}
        />
      )}
    </div>
  );
}

export default App;
