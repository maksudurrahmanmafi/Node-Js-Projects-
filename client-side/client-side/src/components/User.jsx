import { use, useState } from "react";

const User = ({ userPromise }) => {
  const initialUsers = use(userPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email };

    fetch("http://localhost:1001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        setUsers((prevUsers) => [...prevUsers, data]);
        form.reset();
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <div>
      <form onSubmit={handleUser}>
        <input type="text" name="name" placeholder="Enter your name" required />
        <br />
        <br />
        <input type="email" name="email" placeholder="Enter your email" required />
        <br />
        <br />
        <button type="submit">Add user</button>
      </form>

      {users?.map((u, index) => (
        <div key={u._id || u.id || index}>
          <h2>{u.name}</h2>
          <h5>{u.email}</h5>
        </div>
      ))}
    </div>
  );
};

export default User;