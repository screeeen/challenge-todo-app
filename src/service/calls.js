import axios from "axios";

// Fallback solution
// function getBaseURL(){
//   const baseURL = (process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://quick-compo.herokuapp.com/';
// }

class Calls {
  constructor() {
    this.calls = axios.create({
      baseURL: "http://localhost:4000",
    });
  }

  // tasks
  getAllTasks() {
    return this.calls.get(`/api/v1/todos`)
      .then((data) => data)
      .catch((err) => console.log(err))
  }

  getOneTask(id) {
    return this.calls.get(`/api/v1/todos`, id)
      .then((data) => data)
      .catch((err) => console.log(err))
  }


  //post it
  addTask(Taskdata) {
    return this.calls.post("/api/v1/todos",Taskdata)
      .then((data) => data)
      .catch((err) => console.log(err))
  }

}

const calls = new Calls();
export default calls;
