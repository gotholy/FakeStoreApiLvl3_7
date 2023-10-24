import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Fehler beim Fetchen der API", err));
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="productCard">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <h3>{product.price}€</h3>
    </div>
  );
};

export default Product;
