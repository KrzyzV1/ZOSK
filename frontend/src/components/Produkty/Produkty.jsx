import React from 'react';
import { useGlobalContext } from '../../context';
import './Produkty.css';

const Produkty = () => {
  const { loading, products, resultTitle } = useGlobalContext();

  if (loading) {
    return <h2>Ładowanie...</h2>;
  }

  return (
    <div className="produkty">
      <div className="container">
        <h1 className="section-title">{resultTitle}</h1>
        <div className="produkty-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.produktId} className="produkty-item">
                <h2>{product.nazwa}</h2>
                <p>Kategoria: {product.kategoria}</p>
                <p>Numer seryjny: {product.numerSeryjny}</p>
                <p>Cena: {product.cena} PLN</p>
              </div>
            ))
          ) : (
            <p className="no-results">Brak wyników</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Produkty;
