import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const {id} = useParams();
    const handleUpdate = (event) => {
        event.preventDefault();
        //const name = event.target.name.value;
        //const email = event.target.email.value;
        //console.log(name, email);

        const updatedUser = {name, email};

        fetch(`http://localhost:5000/users/${id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  return (
    <div>
        <h2>Update user</h2>
        <form onClick={handleUpdate}>
            <input onBlur={(event)=>{setName(event.target.value)}} type="text" name="name" id="" />
            <input onBlur={(event)=>{setEmail(event.target.value)}} type="email" name="email" id="" />
            <input type="submit" value="Update" />
        </form>
    </div>
  )
}

export default UpdateUser;