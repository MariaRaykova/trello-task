import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ModalBox = ({ onSubmit, handleClose }) => {
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
        <form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control id="name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Badge</Form.Label>
            <Form.Control id="badge" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Add
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalBox;
