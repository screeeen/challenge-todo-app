import React from 'react'
import { Link } from 'react-router-dom'

function OneTask(props) {
  return (
    <div className="OneTask">
      <p>{props.title}</p>

    <Link to={{ pathname: '/' }}>
      <p>SEE ALL TASKS</p>
    </Link>
    </div>
  )
}
export default OneTask;