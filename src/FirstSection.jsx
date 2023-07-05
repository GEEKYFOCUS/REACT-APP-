import React from "react";
import "./App.css";
import { BsFillFilePlusFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { MdPanoramaPhotosphere } from "react-icons/md";

function FirstSection(props) {
  return (
    <div className="TodosClass">
      <form className="Form" onSubmit={props.clickHere}>
        <input
          type="text"
          name="input"
          className="FirstInput"
          placeholder="Add your todo "
          onChange={props.addTodo}
          value={props.todoText}
        />{" "}
        <BsFillFilePlusFill className="FirstIcon" />{" "}
      </form>

      <div className="AddTodo">
        <input type="text" className="SecondInput" placeholder="All" />
        <RiArrowDropDownLine className="SecondIcon" />
      </div>
    </div>
  );
}
export default FirstSection;
