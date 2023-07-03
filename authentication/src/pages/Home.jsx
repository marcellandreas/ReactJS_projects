import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section style={{ height: "100vh", width: "100vh" }}>
      <button>
        <Link to={"/login"}>Login</Link>
      </button>
    </section>
  );
};

export default Home;
