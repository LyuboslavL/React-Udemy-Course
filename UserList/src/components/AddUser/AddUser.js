import React, { useState } from 'react';

import './AddUser.css';
import Button from '../../components/UI/Button/Button';
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => setUsername(event.target.value);
    const ageChangeHandler = (event) => setAge(event.target.value);

    const formSubmitHandler = event => {
        event.preventDefault();

        if (enteredUsername.trim() === '' || enteredAge.trim() === '' || enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({ title: 'Invalid input', message: 'All fields are required!' });
        } else if (+enteredAge < 0) {
            setError({ title: 'Invalid age', message: 'Age must be a positive number!' });
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
        <div>
            {error !== undefined ? <ErrorModal title={error.title} message={error.message} /> : ''};
            <form onSubmit={formSubmitHandler}>
                <div className='add-user'>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type='submit'>Add User</Button>
                </div>
            </form>
        </div>
    )
};

export default AddUser;