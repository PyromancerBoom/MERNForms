import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <form>
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