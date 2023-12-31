import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ShowtodoList(props) {
  return (
    <div
      className="d-flex justify-content-center align-item-center"
      style={{ height: "30vh" }}
    >
      <Card
        style={{ width: "1000px", padding: "30px", border: "2px solid black" }}
      >
        <Card.Title>Todo's List</Card.Title>
        <Card.Body
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Row>
            {props.todos.map((todo) => (
              <Col key={todo.id}>
                <div className="d-flex align-items-center">
                    <p style={{ marginRight: "10px" }}>{todo.task}</p>
                    <Button variant="success" style={{ marginRight: "5px" }}>
                      Completed
                    </Button>
                    <Button variant="danger">Delete</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
