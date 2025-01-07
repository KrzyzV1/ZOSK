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
      <h1>{resultTitle}</h1>
      {products.length > 0 ? (
        <ul className="produkty-list">
          {products.map((product) => (
            <li key={product.produktId} className="produkty-item">
              <h2>{product.nazwa}</h2>
              <p>Kategoria: {product.kategoria}</p>
              <p>Numer seryjny: {product.numerSeryjny}</p>
              <p>Cena: {product.cena} PLN</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Brak wyników</p>
      )}
    </div>
  );
};

export default Produkty;
