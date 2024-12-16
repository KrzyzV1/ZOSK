import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Magazyn.css';

const Magazyn = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/stan_magazynowy')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`/stan_magazynowy/${id}`, { method: 'DELETE' })
      .then(() => setItems(items.filter(item => item.stanId !== id)))  // Poprawka: używamy stanId zamiast id
      .catch(err => console.error(err));
  };

  return (
    <div className="magazyn">
      <div className="container">
        <h1 className="section-title">Magazyn</h1>
        <table className="magazyn-table">
          <thead>
            <tr>
              <th>Lokalizacja</th>  {/* Zmieniono na lokalizację */}
              <th>Ilość</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.stanId}>  {/* Poprawka: używamy stanId */}
                <td>{item.lokalizacja}</td>  {/* Zmieniono na lokalizację */}
                <td>{item.ilosc}</td>  {/* Zmieniono na ilość */}
                <td>
                  <button className="magazyn-btn" onClick={() => handleDelete(item.stanId)}>Usuń</button>  {/* Poprawka: używamy stanId */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/addProduct" className="magazyn-btn">Dodaj Produkt</Link>
      </div>
    </div>
  );
};

export default Magazyn;
