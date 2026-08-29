import "./App.css";
import User from "./components/User";

const userPromise = fetch('http://localhost:1001/users').then(
  res => res.json()
)
function App() {
  return (
    <>
      <h1
        style={{
          margin: "0 auto",
          
          textAlign: "center",
          color: "#1f1d1d",
        }}
      >
        Client Side
      </h1>
      <User userPromise ={userPromise}></User>
    </>
  );
}

export default App;
