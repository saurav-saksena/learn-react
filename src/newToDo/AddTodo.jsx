import React, { useState } from 'react'

export default function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState("");
    return (
        <div>
            <input
                placeholder='add todo'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button
                onClick={() => {
                    setTitle("");
                    onAddTodo(title)
                }}>Add</button>
        </div>
    )
}
