import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalBox from "./Modal";
import { v4 as uuidv4 } from "uuid";
const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  min-height: 100vh;
  border-radius: 6px;
  background: #d4d4d4;
`;
const AddStyles = styled.button`
  font-size: 10px;
  border: none;
  background: #d4d4d4;
`;

const Column = ({ tasks, column, columnTasks }) => {
  const [newColumnTasks, setNewColumnTasks] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setNewColumnTasks(columnTasks);
  }, [columnTasks]);
  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  const onSubmit = (e) => {
    e.preventDefault(e);
    const newTask = {
      id: uuidv4(),
      content: e.target.name.value,
      badge: e.target.badge.value
    };
    const listCopy = { ...tasks };
    const newCol = [...columnTasks, newTask];
    listCopy[column] = newCol;
    localStorage.setItem("tasks", JSON.stringify(listCopy));
    setNewColumnTasks(newCol);
    setShow(false);
  };

  return (
    <DroppableStyles>
      <ColumnHeader>{column}</ColumnHeader>
      <Droppable droppableId={`${column}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {newColumnTasks?.map((item, index) => (
              <div>
                <ListItem key={item?.id} item={item} index={index} />
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddStyles onClick={showModal}>+ Add another card</AddStyles>
      {/* <Button variant="secondary" size="sm" onClick={showModal}>
        Add New Task
      </Button> */}
      {show ? <ModalBox onSubmit={onSubmit} handleClose={closeModal} /> : null}
      {/* <button onClick={addTask}>Add Task</button> */}
    </DroppableStyles>
  );
};

export default Column;
