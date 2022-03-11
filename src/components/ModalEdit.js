import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ModalBox = ({ onSubmitEdit, handleClose, item }) => {
  const [newTask, setNewTask] = useState([]);
  const [newInputData, setNewInputData] = useState({
    inputName: "",
    inputNewValue: ""
  });
  const handleChange = (inputName) => (e) => {
    const inputNewValue = e.target.value;
    setNewInputData({ inputName, inputNewValue });
    setNewTask({ ...newTask, [inputName]: inputNewValue });
  };
  useEffect(() => {
    setNewTask(item);
  }, [item]);
  return (
    <Modal
      show="true"
      size="lg"
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add task</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <form onSubmit={onSubmitEdit}>
          <Form.Group className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              id="content"
              onChange={handleChange("content")}
              value={newTask?.content}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Badge</Form.Label>
            <Form.Control
              id="badge"
              value={newTask?.badge}
              onChange={handleChange("badge")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Task ID</Form.Label>
            <Form.Control id="id" value={newTask?.id} readOnly />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Edit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalBox;
