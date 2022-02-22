import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Lists from "./components/Lists";
import Footer from "./components/Footer";

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
  const [lists, setLists] = React.useState(defaultValue());
  const [scene, setScene] = React.useState("lists");
  const [currentList, setCurrentList] = React.useState("Groceries");

  React.useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  function defaultValue() {
    const saved = localStorage.getItem("lists");
    const initialValue = JSON.parse(saved);
    return initialValue || fakeData;
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
