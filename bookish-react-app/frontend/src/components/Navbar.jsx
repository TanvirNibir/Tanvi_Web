import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eef5ff" }}>
      <h2 style={{ display: "inline", marginRight: "1rem" }}>bookish.fi</h2>
      <Link to="/mainPage">mainPage</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/signup">Sign up</Link>
    </nav>
  );
}

export default Navbar;
