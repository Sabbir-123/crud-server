import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({})
    const handleFullForm=(event)=>{
        event.preventDefault();
        console.log(user)

        fetch('http://localhost:5000/user', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data => {
            
            if(data.acknowledged){
                alert('user added successfull');
                event.target.reset()
            }
        })

    }

    const handleSingleInput =(event) =>{
            const field = event.target.name;
            const value = event.target.value;
            const newUser = {...user};
            newUser[field]= value;
            setUser(newUser)
    }
        return (
        <div>
            <form  onSubmit={handleFullForm}>
                <input onBlur={handleSingleInput} type="email" name="email" id="" required  placeholder='email'/>
                <br />
                <input onBlur={handleSingleInput} type="name" name="name" id="" required placeholder='name'/>
                <br />
                <input onBlur={handleSingleInput} type="password" name="password" id="" required  placeholder='password'/>
                <br />
            <button>Submit</button>
            </form>
        </div>
    );
};

export default AddUser;