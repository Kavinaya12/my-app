import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        console.log(response);
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

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
