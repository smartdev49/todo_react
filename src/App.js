// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "Adam",todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false},
        { action: "Collect Tickets", done: true},
        { action: "Call Joe", done: false},
      ],
      newItemText: ""
    }
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Bob" : "Adam"
    })
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }
  
  createNewTodo = () => {
    console.log(this.state.todoItems);
    if (!this.state.todoItems.find(item=> item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems,
          {action: this.state.newItemText, done:false}
        ],
        newItemText: ""
      })
    }
  }

  render() {
    return (
      <>
        <div>
          <h4 className="bg-primary text-white text-center p-2">
            To Do List
          </h4>
        </div>
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control" 
              value={ this.state.newItemText } 
              onChange={ this.updateNewTextValue } />
            <button className="btn btn-primary mt-1"
              onClick={ this.createNewTodo }
              value={ this.state.newItemText }>Add</button>
          </div>
        </div>
        <div>
          <h4 className="bg-primary text-white text-center p-2">
            { this.state.userName }'s To Do List
            ({ this.state.todoItems.filter(t => !t.done).length} items to do)
          </h4>
        </div>
        <button className="btn btn-primary m-2" onClick={ this.changeStateData }>
          Change
        </button>
      </>
    )
  }  
}
