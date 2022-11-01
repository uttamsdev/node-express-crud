import React from 'react'

const AddUsers = () => {
    const handleAddUsers = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name,email};

        fetch("http://localhost:5000/users",{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        event.target.reset();

    }
  return (
    <div>
        <form onSubmit={handleAddUsers}>
            <input type="text" name="name" id="" />
            <input type="email" name="email" id="" />
            <input type="submit" value="Add Users" />
        </form>
    </div>
  )
}

export default AddUsers;