import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // this is the state
    this.state = {
      todoText: "",
      todos: [
        {
          id: 1,
          text: "FirstTodo",
          completed: false,
        },
        {
          id: 2,
          text: "SecondTodo",
          completed: false,
        },
      ],
    };
    this.todoHandler = this.todoHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  render() {
    return (
      <div
        className="body"
        style={{
          backgroundImage: "linear-gradient(120deg, #851393, #851393, purple)",
          height: "100vh",
          width: "100%",
        }}
      >
        <FirstSection
          todoText={this.state.todoText}
          addTodo={this.todoHandler}
          clickHere={this.submitHandler}
        />
        <SecondSection todos={this.state.todos} />
      </div>
    );
  }
  todoHandler(e) {
    this.setState({ todoText: e.target.value });
  }
  submitHandler(e) {
    e.preventDefault();
    // console.log("i love my mum");

    if (this.state.todoText.length === 0) return;
    // creating a new todoList
    const newTodo = {
      id: new Date(),
      text: this.state.todoText,
      completed: false,
    };
    this.setState({ todos: this.state.todos.concat(newTodo), todoText: " " });

    // alert("Please add a Todo");
  }
}

export default App;
