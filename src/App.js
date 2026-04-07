import { useState } from "react";

function App() {
  const [userId, setUserId] = useState("");

  const registerUser = async () => {
    try {
      const res = await fetch("https://goldpay-backend.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: userId
        })
      });

      const data = await res.json();
      alert(JSON.stringify(data));
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>GoldPay Register</h2>

      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <button onClick={registerUser} style={{ padding: "10px" }}>
        Register
      </button>
    </div>
  );
}

export default App;