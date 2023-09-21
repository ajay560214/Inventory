import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Full name" />
            <input
              type="email"
              placeholder="Email123@gmail.com"
              required
              name="email"
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="password"
            />
            <button type="submit">Register</button>
          </form>
          <span>
            <Link to="/">Home</Link>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Register;
