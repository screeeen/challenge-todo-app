import React, { Component } from 'react';
import calls from './../service/calls';
// import { withRouter } from 'react-router-dom'



class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      redirect: false,
      disable: false
    }
    console.log('player props: ', props)
  }



  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    console.log("posting task", title, "  - ", description);

    calls.addTask({ title, description })
      .then((data) => {
        // this.props.generateTaskList(); //giving issue
        this.setState({ title: "", description: "", redirect: false });
      })
  }

  handleChange = (event) => {
    const { title, value } = event.target;
    console.log("the thing: ", title, value);

    this.setState({ [title]: value });
    console.log(this.state);
  }



  render() {
    return (
      <div className="task-form" >

        <h1>WRITE A TASK</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            title="title"
            value={this.state.title}
            placeholder='task name'
            onChange={(e) => this.handleChange(e)} />

          {this.disable ? <input type="submit" disabled></input> : <input type="submit"></input>}
        </form>

      </div>
    )
  }
}

export default AddTask;