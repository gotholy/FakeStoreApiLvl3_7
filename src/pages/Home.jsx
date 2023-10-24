import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Willkommen im Shop</h1>
      <Link to={`/Shop`}>Zum Shop</Link>
    </>
  );
};

export default Home;
