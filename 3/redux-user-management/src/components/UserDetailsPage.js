import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.users.find((u) => u.id === Number(id)));

  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default UserDetailsPage;