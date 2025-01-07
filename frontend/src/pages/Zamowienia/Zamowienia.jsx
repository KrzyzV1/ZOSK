import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Zamowienia.css';
import API_BASE_URL from '../../config';

const Zamowienia = () => {
  const [zamowienia, setZamowienia] = useState([]);
  const [dostawcy, setDostawcy] = useState([]);
  const [currentView, setCurrentView] = useState('zamowienia'); // 'zamowienia' or 'dostawcy'

  // Fetch zamowienia
  useEffect(() => {
    fetch(`${API_BASE_URL}/zamowienia`)
      .then((response) => response.json())
      .then((data) => setZamowienia(data))
      .catch((err) => console.error(err));
  }, []);

  // Fetch dostawcy
  useEffect(() => {
    fetch(`${API_BASE_URL}/dostawcy`)
      .then((response) => response.json())
      .then((data) => setDostawcy(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteZamowienie = (id) => {
    fetch(`${API_BASE_URL}/zamowienia/${id}`, { method: 'DELETE' })
      .then(() => setZamowienia(zamowienia.filter((item) => item.zamowieniaId !== id)))
      .catch((err) => console.error(err));
  };

  const handleDeleteDostawca = (id) => {
    fetch(`${API_BASE_URL}/dostawcy/${id}`, { method: 'DELETE' })
      .then(() => setDostawcy(dostawcy.filter((item) => item.dostawcaId !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="zamowienia">
      <div className="container">
        <h1 className="section-title">Zarządzaj Zamówieniami i Dostawcami</h1>
        <div className="zamowienia-actions">
          <button
            className={`view-btn ${currentView === 'zamowienia' ? 'active' : ''}`}
            onClick={() => setCurrentView('zamowienia')}
          >
            Zamówienia
          </button>
          <button
            className={`view-btn ${currentView === 'dostawcy' ? 'active' : ''}`}
            onClick={() => setCurrentView('dostawcy')}
          >
            Dostawcy
          </button>
          <Link to="/addOrder" className="add-btn">Dodaj Zamówienie</Link>
        </div>
        
        {currentView === 'zamowienia' ? (
          <table className="zamowienia-table">
            <thead>
              <tr>
                <th>Data Zamówienia</th>
                <th>Status</th>
                <th>Dostawca</th>
                <th>Akcje</th>
              </tr>
            </thead>
            <tbody>
              {zamowienia.map((item) => (
                <tr key={item.zamowieniaId}>
                  <td>{item.dataZamowienia}</td>
                  <td>{item.status}</td>
                  <td>{item.dostawcaId}</td>
                  <td>
                    <button
                      className="zamowienia-btn"
                      onClick={() => handleDeleteZamowienie(item.zamowieniaId)}
                    >
                      Usuń
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="dostawcy-table">
            <thead>
              <tr>
                <th>Nazwa Firmy</th>
                <th>Adres</th>
                <th>Dane Kontaktowe</th>
                <th>NIP</th>
                <th>Akcje</th>
              </tr>
            </thead>
            <tbody>
              {dostawcy.map((item) => (
                <tr key={item.dostawcaId}>
                  <td>{item.nazwaFirmy}</td>
                  <td>{item.adres}</td>
                  <td>{item.daneKontaktowe}</td>
                  <td>{item.numerNip}</td>
                  <td>
                    <button
                      className="dostawcy-btn"
                      onClick={() => handleDeleteDostawca(item.dostawcaId)}
                    >
                      Usuń
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Zamowienia;
