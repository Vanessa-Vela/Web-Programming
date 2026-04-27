import { useState, useEffect } from "react";
import "../App.css";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

function ApiWeb() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [view, setView] = useState("list"); // 'list' o 'detail'

  // Cargar todos los productos al inicio
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  // Lógica de búsqueda
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const openDetail = (id) => {
    setSelectedId(id);
    setView("detail");
  };

  return (
    <div className="apiweb-container">
      {/* Navbar de búsqueda */}
      <nav className="amazon-nav">
        <div className="nav-logo">ApiWeb</div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar productos por nombre..."
            value={search}
            onChange={handleSearch}
          />
          <button className="search-btn">🔍</button>
        </div>
      </nav>

      {view === "list" ? (
        <div className="products-wrapper">
          <h2>Results found: ({filteredProducts.length})</h2>
          <div className="products-grid">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onMoreInfo={openDetail} />
            ))}
          </div>
        </div>
      ) : (
        <ProductDetail id={selectedId} onBack={() => setView("list")} />
      )}
    </div>
  );
}

export default ApiWeb;