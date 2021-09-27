import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
const AddUser = () => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' placeholder='Enter Username' />
        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age' placeholder='Enter Age' />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
