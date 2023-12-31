import React, { useRef } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Addtodosform(props) {
  const task = useRef();

  function onsubmitHandler(e) {
    e.preventDefault();

    const enteredtask = task.current.value;

    const taskdata = {
      task: enteredtask,
      completed: false,
    };
    

    props.ontasksubmit(taskdata);
  }
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
          <form onSubmit={onsubmitHandler}>
            <div className="text-left">
              <label style={{ float: "left" }} >
                Enter Task
              </label>
            </div>
            <input type="text" style={{ width: "100%" }} ref={task}></input>
            <div style={{ display: "flex", justifyContent: "flex-end" , marginTop:'20px'}}>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
