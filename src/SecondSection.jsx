import React from "react";
import "./App.css";

import { GrFormCheckmark } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

function SecondSection(props) {
  return (
    <div className="SectionContainer">
      {props.todos.map((todo) => {
        return (
          <div className="Todos">
            <p type="text" className="ThirdInput">
              {todo.text}
            </p>

            <GrFormCheckmark className="ThirdIcon" />
            <MdDelete className="FourthIcon" />
          </div>
        );
      })}
    </div>
  );
}
export default SecondSection;
