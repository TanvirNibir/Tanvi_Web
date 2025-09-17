import { useState } from "react";
import "../styles/login.css";
import "../styles/global.css";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      
      const response = await fetch("/api/login", {                      //week 4 & 5
        method: "POST",
        headers: { "Content-Type": "application/json" },               // Replace this URL with our backend login endpoint(Doniya & Ode)
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }
      const data = await response.json();
      console.log("✅ Login success:", data);
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="sign-box">
        <h2 className="login-heading">
          Welcome back! Your next chapter is waiting for you! <br /> Sign in!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username or email"
              value={form.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <label className="remember">
            <input type="checkbox" /> Remember me
          </label>

          {error && <p className="error">{error}</p>}

          <button
            className="btn"
            type="submit"
            disabled={!form.username || !form.password || loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <a href="#" className="forgot">
          Forgot password?
        </a>
        <br />
        <br />
        <div className="signup-link">
          Don’t have an account? <a href="/signup">Create one</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
