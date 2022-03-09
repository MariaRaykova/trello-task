import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { columns } from "../utils/items";
import Column from "./Column";

const DragDropContextContainer = styled.div`
  padding: 7px;
  background-color: lightblue;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 7px;
`;

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

function Container() {
  const [tasks, setTasks] = useState(null);
  const storage = JSON.parse(localStorage.getItem("tasks"));
  useEffect(() => {
    setTasks(storage);
  }, []);
  const resetTasks = () => {
    localStorage.clear();
  };
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...tasks };
    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    localStorage.setItem("tasks", JSON.stringify(listCopy));
    setTasks(listCopy);
  };

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {columns.map((columnName) => (
            <Column
              tasks={tasks}
              columnTasks={tasks ? tasks[columnName] : []}
              key={columnName}
              column={columnName}
            />
          ))}
        </ListGrid>
      </DragDropContext>
      <button onClick={resetTasks}>ResetTasks</button>
    </DragDropContextContainer>
  );
}

export default Container;
