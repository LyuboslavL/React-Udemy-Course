import React, { useState } from 'react';

import './AddUser.css';
import Button from '../../components/UI/Button/Button';
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

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
            return;
        } else if (+enteredAge < 0) {
            setError({ title: 'Invalid age', message: 'Age must be a positive number!' });
            return;
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
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <form onSubmit={formSubmitHandler}>
                <div className='add-user'>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type='submit'>Add User</Button>
                </div>
            </form>
        </Wrapper>
    )
};

export default AddUser;