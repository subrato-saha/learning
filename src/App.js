import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Learning React Native</h2>
      <Users></Users>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const style = {
    backgroundColor: "gray",
    border: "1px solid black",
    borderRadius: "10px",
    height: "200px",
    width: "60%",
    margin: "20px",
  };
  return (
    <div>
      {users.map((user) => (
        <div key={user.email} style={style}>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
          <h3>{user.website}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
