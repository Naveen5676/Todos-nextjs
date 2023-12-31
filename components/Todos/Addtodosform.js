import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Addtodosform() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "30vh" }}
    >
      <Card
        style={{
          width: "600px",
          padding: "30px",
          border: "2px solid #ff0000 ",
        }}
      >
        <Card.Title>Add Todo</Card.Title>
        <Card.Body style={{ fontSize: "20px" }}>
          <form>
            <div className="text-left">
              <label style={{ float: "left" }}>Enter Info</label>
            </div>
            <input type="text" style={{ width: "100%" }}></input>
          </form>
        </Card.Body>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>Submit</Button>
        </div>
      </Card>
    </div>
  );
}
