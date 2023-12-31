import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ShowtodoList(props) {
  async function completedHandler(id) {
    const response = await fetch("/api/completedtodos", {
      method: "PATCH",
      body: JSON.stringify({ id: id.toString() }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result.message);
    } else {
      const errorResult = await response.json();
      console.error("Error updating document:", errorResult.message);
    }
  }

  async function deleteHandler(id) {
    const res = await fetch("/api/deletetodos", {
      method: "DELETE",
      body: JSON.stringify({ id: id.toString() }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const result = await res.json();
      console.log(result.message);
    } else {
      const errorResult = await res.json();
      console.error("Error updating document:", errorResult.message);
    }
  }

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
                  <Button
                    variant="success"
                    style={{ marginRight: "5px" }}
                    onClick={() => completedHandler(todo.id)}
                  >
                    Completed
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteHandler(todo.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
