import React from 'react'
import { connect } from 'react-redux'

const Todos = ({todos}) => (
  <div>
    <h1>Todos</h1>
    {todos.map(todo => <p key={todo}>{todo}</p>)}
  </div>
)

function mapStateToProps(todos) {
  return {
    todos
  }
}

// comments.... here.....testing from atom editor

export default connect(mapStateToProps) (Todos)
