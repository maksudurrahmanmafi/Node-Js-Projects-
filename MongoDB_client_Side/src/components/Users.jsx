
const Users = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    fetch("http://localhost:3400/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("User added successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      {" "}
      <h2>Add User</h2>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input type="text" name="name" placeholder="Enter Name" required />{" "}
        <br /> <br />{" "}
        <input type="email" name="email" placeholder="Enter Email" required />{" "}
        <br /> <br /> <input type="submit" value="Submit" />{" "}
      </form>{" "}
    </div>
  );
};
export default Users;
