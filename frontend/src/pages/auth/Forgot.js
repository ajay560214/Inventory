import { Link } from "react-router-dom";
const Forgot = () => {
  return (
    <div>
      <div>
        <h2>Forgot Password</h2>
        <form>
          <input
            type="email"
            placeholder="Email123@gmail.com"
            required
            name="email"
          />
          <button type="submit">Reset Password</button>
        </form>
        <div>
          <Link to="/">Home</Link>
          <Link to="/register">Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
