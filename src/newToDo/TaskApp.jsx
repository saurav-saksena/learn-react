import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TaskList from './TaskList'

let nextId = 3;
// const initialTodos = [
//     { id: 0, title: 'buy milk', done: true },
//     { id: 0, title: 'sleep after eat', done: false },
//     { id: 0, title: 'buy milk', done: false },
// ]

export default function TaskApp() {
    const [todos, setTodos] = useState([])
    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo
            } else {
                return t;
            }
        }))
    }
    function handleDeleteTodo(todoId) {
        setTodos(
            todos.filter(t => t.id !== todoId)
        )
    }
    return (
        <div className='white--ground' style={{ padding: "10px" }}>
            <h1>hello world!</h1>
            <AddTodo
                onAddTodo={handleAddTodo}
            />

            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </div>
    )
}
