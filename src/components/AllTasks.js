import React, { Component } from 'react'
import { Route, Redirect } from 'react-router';
import { Link } from "react-router-dom";
import calls from './../service/calls';
import TaskCell from './TaskCell';


class AllTasks extends Component {
  constructor(props) {
    super(props);
    console.log("all tasks props ", props);
    this.state = {
      tasks:[],
      title:'',
      description:''
    }
    console.log("all tasks this state ", this.state);
  }

  componentDidMount() {
    calls.getAllTasks()
      .then(res => {
        const tasks = res.data;
        console.log('get tasks did mount:',tasks);
        this.setState({ tasks });
      })
  }



  generateTaskList = () => {
    return this.state.tasks.slice(0).reverse().map((oneTask, i) => {
      const { title, _id } = oneTask;
      return (
        <TaskCell 
          key={i}
          title={title}
          _id={_id}
        />
      )
    })
  }

  

  render() {
    return (
      <div>
      <h1>TASKS</h1>
      {this.generateTaskList()}
      </div>
    )
  }
}

export default AllTasks;
