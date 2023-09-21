import { Link } from "react-router-dom";
const ResetPass = () => {
  return (
    <div>
      <div>
        <h2>Reset Password</h2>
        <form>
          <input
            type="password"
            placeholder="New Passwore"
            required
            name="password"
          />{" "}
          <input
            type="password"
            placeholder="Confirm New Passwore"
            required
            name="password"
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
export default ResetPass;
