import React, { useState, useRef } from 'react';

import './AddUser.css';
import Button from '../../components/UI/Button/Button';
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const formSubmitHandler = event => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim() === '' || enteredUserAge.trim() === '' || enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({ title: 'Invalid input', message: 'All fields are required!' });
            return;
        } else if (+enteredUserAge < 0) {
            setError({ title: 'Invalid age', message: 'Age must be a positive number!' });
            return;
        }
        // else if (/\d/.test(enteredUsername)) {
        //     alert('You must enter a valid name')
        // }

        const newUser = {
            username: enteredName,
            age: enteredUserAge
        };

        props.onAddedUser(newUser);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
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
                    <input id='username' type="text" ref={nameInputRef}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' ref={ageInputRef}></input>
                    <Button type='submit'>Add User</Button>
                </div>
            </form>
        </Wrapper>
    )
};

export default AddUser;