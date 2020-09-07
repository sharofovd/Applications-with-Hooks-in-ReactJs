import React, {useState, useEffect} from 'react';

const EditUserForm=props=>{
    const [user,setUser]=useState(props.currentUser)

    useEffect(
        ()=>{
            setUser(props.currentUser)
        },
        [props]
    )
    const handleInputChange=event=>{
        const {name,value}=event.target

        setUser({...user,[name]:value})
    }

    const handleSubmit=event=>{
        event.preventDefault()
        if(!user.name||!user.username) return
        props.updateUser(user.id,user)
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
            <button className="btn btn-primary">Update user</button>
            &nbsp;&nbsp;
            <button
            onClick={()=>props.setEditing(false)}
            className="btn btn-secondary"
            >Cancel</button>
        </form>
    );
}

export {EditUserForm};