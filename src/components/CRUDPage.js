import React, { useEffect, useState } from "react";
import axios from "axios";

function CRUDPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");

      setUsers(response.data.users);
    } catch (error) {}
  };

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>id: {user.id}</p>
          <img src={user.image} alt="" />
          <p>phone : {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default CRUDPage;
