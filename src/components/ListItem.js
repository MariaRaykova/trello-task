import { Draggable } from "react-beautiful-dnd";
import React, { useState } from "react";
import ModalBoxEdit from "./ModalEdit";
import styled from "styled-components";
import { Badge } from "react-bootstrap";

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border: 3px solid white;
  border-radius: 50%;
`;
const Author = styled.div`
  display: flex;
  align-items: center;
`;
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;
const EditStyles = styled.button`
  font-size: 12px;
  border: none;
  color: #61dafb;
  width: 100%;
`;

const ListItem = ({ item, index, onSubmitEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const showModalEdit = () => {
    setShowEdit(true);
  };
  const closeModalEdit = () => {
    setShowEdit(false);
  };

  return (
    <Draggable draggableId={item?.id} index={index}>
      {(provided, snapshot) => {
        return (
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <Badge pill bg="info">
                {item?.badge}
              </Badge>
              <div>{item?.content}</div>
              <EditStyles onClick={showModalEdit}>Edit</EditStyles>
              {showEdit ? (
                <ModalBoxEdit
                  onSubmitEdit={onSubmitEdit}
                  handleClose={closeModalEdit}
                  item={item}
                />
              ) : null}
            </div>
            <CardFooter>
              <Author>
                <Avatar src={`/images/1.jpg`} />
                <Avatar src={`/images/2.jpg`} />
                <Avatar src={`/images/3.jpg`} />
              </Author>
            </CardFooter>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
