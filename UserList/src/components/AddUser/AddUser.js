import React from 'react';

import './AddUser.css';
import Button from '../../components/UI/Button/Button';

const AddUser = (props) => {
    return (
        <form>
            <div className='add-user'>
                <div className='add-user__input'>
                    <label>Username</label>
                    <input type="text"></input>
                </div>
                <div className='add-user__input'>
                    <label>Age (Years)</label>
                    <input type='text'></input>
                </div>
                <div className='add_user__action'>
                    <Button type='submit'>Add User</Button>
                </div>
            </div>
        </form>
    )
};

export default AddUser;