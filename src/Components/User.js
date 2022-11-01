import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const users = useLoaderData()
const [displayUsers, setDisplayUsers]= useState(users);
    const handleDelete = user=>{
      const agree= window.confirm(`Are you sure want to delete this id ${user.name}?`)
if (agree){
    fetch(`http://localhost:5000/user/${user._id}`,{
        method: 'DELETE',
    })
    .then(res =>res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
            alert('User has been deleted')
            const remaining = displayUsers.filter(usr=>
                usr._id !== user._id)
                setDisplayUsers(remaining)
        }
    })
}
    }
    return (
        <div>
            <h1>Users {displayUsers.length}</h1>
            {
                displayUsers.map(user=><p
                 key={user._id}> 
                 {user.name} 
                  {user.email}
                <Link to={`update/${user._id}`}> <button>Update</button> </Link>
                 <button onClick={()=>handleDelete(user)}>X</button></p>)
            }
        </div>
    );
};

export default User;