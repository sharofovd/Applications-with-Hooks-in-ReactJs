import React, {useState} from 'react';
import {AddUserForm} from './forms/AddUserForm';
import {EditUserForm} from './forms/EditUserForm';
import {UserTable} from './tables/UserTable';
import './App.css';

function App() {
  const userData=[
    {id: 1, name:'Dadaxon Sharofov', username:'shdo123'},
    {id: 2, name: 'Dilyor',username:'dilyor1991'},
  ]
 
  const [users,setUsers]=useState(userData);
  const [editing,setEditing]=useState(false);
  const initialFormState={id:null,name:'',username:''};
  const [currentUser,setCurrentUser] = useState(initialFormState);

  const addUser=user=>{
    user.id=users.length+1;
    setUsers([...users,user])
  }
  const deleteUser=id=>{
    setEditing(false);
    setUsers(users.filter(user=>user.id!==id))
  }
  const updateUser=(id,updatedUser)=>{
    setEditing(false);
    setUsers(users.map(user=>(user.id===id?updatedUser:user)))
  }
  const editRow=user=>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username});
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App;
