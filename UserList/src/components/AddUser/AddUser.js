import React, { useState } from 'react';

import './AddUser.css';
import Button from '../../components/UI/Button/Button';

const AddUser = (props) => {
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');

    const usernameChangeHandler = (event) => setUsername(event.target.value);
    const ageChangeHandler = (event) => setAge(event.target.value);

    const formSubmitHandler = event => {
        event.preventDefault();

        if (enteredUsername === '' || enteredAge === '') {
            return alert('All fields are required!');
        } else if (enteredAge < 0) {
            return alert('You must enter a valid age');
        }
        // else if (/\d/.test(enteredUsername)) {
        //     alert('You must enter a valid name')
        // }

        const newUser = {
            username: enteredUsername,
            age: enteredAge
        };

        props.onAddedUser(newUser);
        setUsername('');
        setAge('');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='add-user'>
                <div className='add-user__input'>
                    <label>Username</label>
                    <input type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                </div>
                <div className='add-user__input'>
                    <label>Age (Years)</label>
                    <input type='number' value={enteredAge} onChange={ageChangeHandler}></input>
                </div>
                <div className='add_user__action'>
                    <Button type='submit'>Add User</Button>
                </div>
            </div>
        </form>
    )
};

export default AddUser;