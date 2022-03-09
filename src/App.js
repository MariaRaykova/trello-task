import "./styles.css";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { items } from "./utils/items";
export default function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(items);
  }, [elements]);

  if (elements && !localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify(elements));
  }
  return (
    <div className="App">
      <Container />
    </div>
  );
}
