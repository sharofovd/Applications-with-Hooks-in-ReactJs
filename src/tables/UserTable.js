import React from 'react';

const UserTable = props => {
  const handleDeleteUser = id => {
    let answer = window.confirm('Are you sure to delete this record?')

    if (answer) {
      props.deleteUser(id)
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name:</th>
          <th>Username:</th>
          <th>Actions:</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
              <button
                  onClick={() => {
                    props.editRow(user)
                  }}
                  className="btn btn-success"
                >
                  Edit
                </button>&nbsp;&nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
export { UserTable }