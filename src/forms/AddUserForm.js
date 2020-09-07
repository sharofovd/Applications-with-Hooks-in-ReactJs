import React, { useState } from 'react'

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.currentTarget
    setUser({ ...user, [name]: value })
  }

  const handleSubmit=event=>{
      event.preventDefault()
      if(!user.name||!user.username) return
      props.addUser(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>&nbsp;&nbsp;
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      &nbsp;&nbsp;
      <label>Username:</label>
      &nbsp;&nbsp;
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      &nbsp;&nbsp;
      <button class="btn btn-primary">Add new user</button>
    </form>
  )
}

export { AddUserForm }