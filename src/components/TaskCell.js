import React from 'react'
import { Link } from 'react-router-dom'
export default function TaskCell(props) {
  return (
    <div>
      <Link to={{ pathname: '/one-task' }}>
        {/* <p>{props.key}</p> */}
        <h1>{props.title}</h1>
      </Link>
    </div>
  )
}
