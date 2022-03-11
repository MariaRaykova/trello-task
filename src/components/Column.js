import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalBox from "./Modal";
import ModalBoxEdit from "./ModalEdit";
import { v4 as uuidv4 } from "uuid";
const ColumnHeader = styled.div`
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

const Column = ({ tasks, column, columnTasks, parentCallback }) => {
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
  const onSubmitEdit = (e) => {
    e.preventDefault(e);
    const newTask = {
      id: e.target.id.value,
      content: e.target.content.value,
      badge: e.target.badge.value
    };
    const listCopy = { ...tasks };
    const newArr = [];
    newColumnTasks.forEach((element) => {
      element.id === newTask.id ? newArr.push(newTask) : newArr.push(element);
    });
    listCopy[column] = newArr;
    localStorage.setItem("tasks", JSON.stringify(listCopy));
    setNewColumnTasks(newArr);
    parentCallback(JSON.parse(localStorage.getItem("tasks")));
    closeModal(false);
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
    parentCallback(JSON.parse(localStorage.getItem("tasks")));
    setShow(false);
  };

  return (
    <DroppableStyles>
      <ColumnHeader>{column}</ColumnHeader>
      <Droppable droppableId={`${column}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {newColumnTasks.length > 0
              ? newColumnTasks.map((item, index) => {
                  return (
                    <div>
                      <ListItem
                        key={item?.id}
                        item={item}
                        index={index}
                        onSubmitEdit={onSubmitEdit}
                      />
                    </div>
                  );
                })
              : null}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddStyles onClick={showModal}>+ Add another card</AddStyles>
      {show ? <ModalBox onSubmit={onSubmit} handleClose={closeModal} /> : null}
    </DroppableStyles>
  );
};

export default Column;
