import React, { useState, useEffect } from 'react';
import './Sprzedaz.css';
import API_BASE_URL from '../../config';

const Sprzedaz = () => {
  const [transakcje, setTransakcje] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/transakcje`)
      .then((response) => response.json())
      .then((data) => setTransakcje(data))
      .catch((err) => console.error('Error fetching transakcje:', err));
  }, []);

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/transakcje/${id}`, { method: 'DELETE' })
      .then(() => setTransakcje(transakcje.filter((transakcja) => transakcja.transakcjaId !== id)))
      .catch((err) => console.error('Error deleting transakcja:', err));
  };

  return (
    <div className="sprzedaz">
      <div className="container">
        <h1 className="section-title">Transakcje</h1>
        <table className="sprzedaz-table">
          <thead>
            <tr>
              <th>Data Transakcji</th>
              <th>Numer Partii</th>
              <th>Kwota</th>
              <th>Ilość</th>
              <th>Numer Zamówienia</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {transakcje.map((transakcja) => (
              <tr key={transakcja.transakcjaId}>
                <td>{transakcja.dataTransakcji}</td>
                <td>{transakcja.numerPartii}</td>
                <td>{transakcja.kwota} PLN</td>
                <td>{transakcja.ilosc}</td>
                <td>{transakcja.numerZamowienia}</td>
                <td>
                  <button
                    className="sprzedaz-btn"
                    onClick={() => handleDelete(transakcja.transakcjaId)}
                  >
                    Usuń
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sprzedaz;
