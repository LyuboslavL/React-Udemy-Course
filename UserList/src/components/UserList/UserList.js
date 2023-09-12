import React from 'react';

import './UserList.css';
import Card from '../Card/Card';

const UserList = (props) => {
    return (
        <ul className='users'>
            {props.users.map(user => (
                <Card key={Math.random()}>{user.username} ({user.age} years old)</Card>
            ))}
        </ul>
    );
};

export default UserList;