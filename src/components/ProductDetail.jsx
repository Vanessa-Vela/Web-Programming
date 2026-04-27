import { useEffect, useState } from "react";

function ProductDetail({ id, onBack }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading details...</p>;

  return (
    <div className="detail-container" style={{ padding: "40px", backgroundColor: "white", margin: "20px" }}>
      <button onClick={onBack} className="more-info-btn">← Return to results</button>
      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        <img src={product.images[0]} alt={product.title} style={{ width: "400px" }} />
        <div>
          <h1>{product.title}</h1>
          <p style={{ fontSize: "24px", color: "#b12704" }}>US$ {product.price}</p>
          <p>{product.description}</p>
          <p><strong>Categorie:</strong> {product.category}</p>
          <button className="more-info-btn" style={{ width: "200px", marginTop: "20px" }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;