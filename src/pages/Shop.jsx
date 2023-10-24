import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [shopData, setShopData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setShopData(data))
      .catch((err) => console.error("Fehler beim Fetchen der API", err));
  }, []);
  return (
    <>
      <h2>Willkommen</h2>
      <section className="shopContainer">
        {shopData ? (
          shopData.map((item, index) => (
            <article className="product" key={index}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <Link to={`/product/${item.id}`}>Show More</Link>
            </article>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </>
  );
};

export default Shop;
