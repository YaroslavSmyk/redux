import React from 'react';

const Users = ({ name, age }) => {
  return (
    <li class="user">
      <span class="user__name">{name}</span>
      <span class="user__age">{age}</span>
    </li>
  );
};

export default Users;
