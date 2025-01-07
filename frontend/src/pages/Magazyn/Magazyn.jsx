import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Magazyn.css';
import API_BASE_URL from '../../config';

const Magazyn = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/stan_magazynowy`)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/stan_magazynowy/${id}`, { method: 'DELETE' })
      .then(() => setItems(items.filter(item => item.stanId !== id)))
      .catch(err => console.error(err));
  };

  const handleEdit = (id) => {
    navigate(`/editProduct/${id}`); // Przekierowanie do komponentu edycji
  };

  return (
    <div className="magazyn">
      <div className="container">
        <h1 className="section-title">Magazyn</h1>
        <table className="magazyn-table">
          <thead>
            <tr>
              <th>Lokalizacja</th>
              <th>Ilość</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.stanId}>
                <td>{item.lokalizacja}</td>
                <td>{item.ilosc}</td>
                <td>
                  <button
                    className="magazyn-btn"
                    onClick={() => handleEdit(item.stanId)}
                  >
                    Edytuj
                  </button>
                  <button
                    className="magazyn-btn"
                    onClick={() => handleDelete(item.stanId)}
                  >
                    Usuń
                  </button>
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
