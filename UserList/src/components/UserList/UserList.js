import React from 'react';

import './UserList.css';
import Card from '../Card/Card';

const UserList = (props) => {
    return (
        <ul className='result'>
            {props.data.map(user => (
                <Card key={Math.random()}>{user.username} {user.age}</Card>
            ))}
        </ul>
    );
};

export default UserList;