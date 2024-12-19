import React, { useState } from 'react'
import './UserEditForm.css'

function EditUserForm({ user, onSave, onCancel }) {
  const [firstName, setFirstName] = useState(user.first_name)
  const [lastName, setLastName] = useState(user.last_name)
  const [email, setEmail] = useState(user.email)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ first_name: firstName, last_name: lastName, email })
  }

  return (
    <form className="edit-user-form" onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
