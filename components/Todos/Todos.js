import React, { Fragment } from "react";
import Addtodosform from "./Addtodosform";
import ShowtodoList from "./Showtodolist";
import "bootstrap/dist/css/bootstrap.min.css";

function Todos() {
  return (
    <Fragment>
      <div className="mb-3">
        <Addtodosform />
      </div>
      <ShowtodoList />
    </Fragment>
  );
}
export default Todos;
