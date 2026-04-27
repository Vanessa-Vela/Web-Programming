function ProductCard({ product, onMoreInfo }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="info">
        <h3 className="title">{product.title}</h3>
        <p className="price">US$ {product.price}</p>
        <p className="shipping">Free shipping to Ecuador</p>
        <button className="more-info-btn" onClick={() => onMoreInfo(product.id)}>
          More information
        </button>
      </div>
    </div>
  );
}

export default ProductCard;