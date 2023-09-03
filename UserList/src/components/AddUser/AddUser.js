import React from 'react';

import Button from '../../components/UI/Button/Button';

const AddUser = (props) => {
    return (
        <form>
            <div>
                <label>Username</label>
                <input type="text"></input>
                <label>Age (Years)</label>
                <input type='text'></input>
            </div>
            <Button type='submit'>Add User</Button>
        </form>
    )
};

export default AddUser;