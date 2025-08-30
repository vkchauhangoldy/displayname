import React, { useState } from 'react'
import './Name.css'
const Name = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [fullName, setFullName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`)
    }
    console.log(fullName)
    return (
        <div className='container'>
            <h1>Full Name Display</h1>
            <form className='form' onSubmit={submitHandler}>
                <div className='input-controls'>
                    <label>First Name:</label>
                    <input type="text" name='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className='input-controls'>
                    <label>Last Name:</label>
                    <input type="text" name='lastname' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className='action-controls'>
                    <button>Submit</button>
                </div>
            </form>

            {
                fullName &&
                <div>
                    Full Name: {fullName}
                </div>
            }
        </div>
    )
}

export default Name
