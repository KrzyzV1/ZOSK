import React from 'react';
import { useGlobalContext } from '../../context';
import SearchForm from '../SearchForm/SearchForm';
import './Produkty.css';

const Produkty = () => {
  const { products, loading } = useGlobalContext();

  return (
    <div className="produkty">
      <div className="container">
        <h1 className="section-title">Produkty</h1>
        <SearchForm />
        {loading && <p className="loading-text">Ładowanie...</p>}
        {!loading && products.length > 0 && (
          <div className="product-list">
            {products.map(product => (
              <div key={product.produktId} className="product-item">
                <h2>{product.nazwa}</h2>
                <p>Kategoria: {product.kategoria}</p>
                <p>Cena: {product.cena} PLN</p>
                <p>Numer seryjny: {product.numerSeryjny}</p>
              </div>
            ))}
          </div>
        )}
        {!loading && products.length === 0 && <p className="no-results">Brak wyników wyszukiwania.</p>}
      </div>
    </div>
  );
};

export default Produkty;
