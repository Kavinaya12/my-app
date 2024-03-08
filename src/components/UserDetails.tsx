import React from "react";

interface UserDetailsProps {
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

const UserDetails: React.FC<UserDetailsProps> = ({
  user = { id: 0, email: "xx", first_name: "ll", last_name: "b", avatar: "ll" },
}) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <img
        src={user.avatar}
        alt={`Avatar of ${user.first_name}`}
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default UserDetails;
