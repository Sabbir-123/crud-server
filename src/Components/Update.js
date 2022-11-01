import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData()
    const [user, setUser] = useState(storedUser)
    const handleUpdateForm=(event)=>{
        event.preventDefault();
        console.log(user)
        fetch(`http://localhost:5000/user/${storedUser._id}`, {
        method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{

            console.log(data);
        })



    }

    const handleSingleUser =(event) =>{
            const field = event.target.name;
            const value = event.target.value;
            const newUser = {...user};
            newUser[field]= value;
            setUser(newUser)
    }
    return (
        <div>
            <h1>Update {storedUser.name}</h1>
            <form  onSubmit={handleUpdateForm}>
                <input onChange={handleSingleUser} type="email" name="email" id="" defaultValue={storedUser.email} required  placeholder='email'/>
                <br />
                <input onChange={handleSingleUser} type="name" name="name" id="" defaultValue={storedUser.name} required placeholder='name'/>
                <br />
                <input onChange={handleSingleUser} type="password" name="password" id="" required defaultValue={storedUser.password}  placeholder='password'/>
                <br />
            <button>Update Submit</button>
            </form>
        </div>
    );
};

export default Update;