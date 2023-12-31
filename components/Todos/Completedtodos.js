import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Completedtodos() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "30vh" }}
    >
      <Card
        style={{
          width: "800px",
          padding: "30px",
          border: "2px solid grey ",
        }}
      >
        <Card.Title>Completed Task</Card.Title>
        <Card.Body>
         
            <p>Revise React</p>
   
        </Card.Body>
      </Card>
    </div>
  );
}
