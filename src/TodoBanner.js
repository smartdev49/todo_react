import React, { Component } from "react";

export class TodoBanner extends Component{
    constructor(props){
        super(props)
    }

    render = () =>
        <h4 className="bg-primary text-white text-center p-2">
            { this.props.userName }'s To Do List
            ({ this.props.tasks.filter(t=>!t.done).length } items to do)
        </h4>
}