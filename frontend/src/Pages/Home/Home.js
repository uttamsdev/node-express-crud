import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    },[users])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    }

  return (
    <div>
        <h1>Available Data {users.length}</h1>
        {
            users.map(user => <><li type="1">{user.name} {user.email}<button onClick={()=>{handleUpdate(user._id)}}>Update</button><button onClick={()=>{handleDelete(user._id)}}>Delete</button></li></>)
        }
    </div>
  )
}

export default Home;