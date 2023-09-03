import React from 'react';

const AddUser = (props) => {
    return (
        <form>
            <div>
                <label>Username</label>
                <input type="text"></input>
                <label>Age (Years)</label>
                <input type='text'></input>
            </div>
        </form>
    )
};

export default AddUser;