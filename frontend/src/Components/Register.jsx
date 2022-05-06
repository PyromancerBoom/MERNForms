import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /*
    Async keyword use for define function for 
    use await task, when you want to use to await for 
    wait task then first you have to define async function. 
    Await keyword use for stop execution 
    till task response, we will use multiple 
    await calls in one async function.*/
    async function registerUser(){
        const response = await fetch('http://localhost:1337/api/register', {
            // send the data as application json type
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        // convert to json
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={registerUser}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" placeholder='Name' />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder='Email' />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
                <br />
            </form>
        </div>
    )
}

export default Register