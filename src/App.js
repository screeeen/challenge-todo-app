import React, { Component } from 'react';
import { Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import AllTasks from './components/AllTasks';
import EditTask from './components/EditTask';
import OneTask from './components/OneTask';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <Switch>
            <AllTasks exact path="/" component={AllTasks} />
            <OneTask exact path="/one-task" component={OneTask} />
            <EditTask exact path="/edit-task" component={EditTask} />
          </Switch>

        </div>
        <Footer tournament={this.props.currentTournament} />
      </div>
    );
  }
}

export default App;
