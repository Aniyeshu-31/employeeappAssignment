import React from 'react'
import './UserList.css'

function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default UserList
