import React from "react";

const FruitList = () => {
  const fruits = [
    { name: "Apple", color: "red" },
    { name: "Banana", color: "yellow" },
    { name: "Grapes", color: "purple" },
    { name: "Orange", color: "orange" },
    { name: "Mango", color: "yellow" },
  ];
  return (
    <div style={styles.container}>
      <h1>Fruit List</h1>
      <ul style={styles.list}>
        {fruits.map((fruit, color) => (
          <li key={color} style={{ color: fruit.color }}>
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    marginTop: "2rem",
    backgroundColor: "#2A4759",
    color: "white",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    fontSize: "18px",
    padding: "8px 0",
  },
};

export default FruitList;
