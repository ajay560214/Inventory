import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form>
          <input
            type="email"
            placeholder="Email123@gmail.com"
            required
            name="email"
          />
          <input
            type="password"
            placeholder="Passwore"
            required
            name="password"
          />
          <button type="submit">Login</button>
        </form>
        <Link to="/forgot">Forgot Password</Link>
        <span>
          <Link to="/">Home</Link>
          <p>Don'n have an account</p>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
};
export default Login;
