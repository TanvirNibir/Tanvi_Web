import { useState } from "react";
import "../styles/signup.css";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  // 🔹 Function to generate a strong random password
  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setForm({ ...form, password: newPassword, confirm: newPassword });

    // Optional: Copy to clipboard
    // navigator.clipboard.writeText(newPassword).then(() => {
    //   alert("Password suggested & copied to clipboard!");
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signup: ${form.username} / ${form.email}`);
  };

  return (
    <div className="home">
      <div className="signup-box">
        <h2 className="signup-heading">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>

          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="input-field password-container">
            <input
              type="text"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <button
              type="button"
              className="suggest-btn"
              onClick={generatePassword}
            >
              Suggest
            </button>
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder="Conffirm Password"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              required
            />
          </div>

          <br />
          <br />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
