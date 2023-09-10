import React, { useState } from 'react';

import './AddUser.css';
import Button from '../../components/UI/Button/Button';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => setUsername(event.target.value);
    const ageChangeHandler = (event) => setAge(event.target.value);

    const formSubmitHandler = event => {
        event.preventDefault();

        if (enteredUsername.trim() === '' || enteredAge.trim() === '') {
            setError(true);
            let message = 'All fields are required!'
            return <ErrorModal>{message}</ErrorModal>
        } else if (enteredAge < 0) {
            setError(true);
            let message = 'You must enter a valid age!';
            return <ErrorModal>{message}</ErrorModal>
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
                <label htmlFor='username'>Username</label>
                <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type='submit'>Add User</Button>
            </div>
        </form>
    )
};

export default AddUser;