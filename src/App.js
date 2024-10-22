// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "Adam"
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
        <div>
          <h4 className="bg-primary text-white text-center p-2">
            {this.state.userName}'s To Do List
          </h4>
        </div>
      </>
    )
  }  
}
