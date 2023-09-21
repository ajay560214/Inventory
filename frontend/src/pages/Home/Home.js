import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <nav>
        <div>
          <RiProductHuntLine size={35} />
        </div>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button>
              <Link to="/login">Login</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </li>
        </ul>
      </nav>
      <section>
        <div>
          <h2>Inventory {"&"} Stock Management System</h2>
          <p>
            Inventory: Organized tracking of products, optimizing stock levels,
            ensuring availability, and enhancing business efficiency. Manage,
            grow, and thrive
          </p>
          <div>
            <button>
              <Link to="/dashboard">Free Trial 1 week</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
