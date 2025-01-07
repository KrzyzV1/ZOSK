import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../config';
import './Finanse.css';

const Finanse = () => {
  const [faktury, setFaktury] = useState([]);

  useEffect(() => {
    // Załaduj faktury z API (w tym przypadku testowego)
    fetch(`${API_BASE_URL}/faktury`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setFaktury(data);
        } else {
          setFaktury([]);
        }
      })
      .catch((error) => {
        console.error('Błąd podczas ładowania faktur:', error);
        setFaktury([]); // Jeśli błąd, pokaż pustą listę
      });
  }, []);

  return (
    <div className="finanse">
      <div className="container">
        <div className="finanse-header">
          <h1 className="section-title">Faktury</h1>
          <div className="finanse-buttons">
            <Link to="/addInvoice" className="finanse-btn">
              Dodaj Fakturę
            </Link>
            <Link to="/reports" className="finanse-btn">
              Raporty
            </Link>
          </div>
        </div>
        {faktury.length > 0 ? (
          <table className="faktury-table">
            <thead>
              <tr>
                <th>Numer Faktury</th>
                <th>Data Wystawienia</th>
                <th>Kwota</th>
                <th>Status Płatności</th>
                <th>Klient ID</th>
                <th>Dostawca ID</th>
              </tr>
            </thead>
            <tbody>
              {faktury.map((faktura) => (
                <tr key={faktura.fakturaId}>
                  <td>{faktura.numerFaktury}</td>
                  <td>{faktura.dataWystawienia}</td>
                  <td>{faktura.kwota}</td>
                  <td>{faktura.statusPlatnosci}</td>
                  <td>{faktura.klientId}</td>
                  <td>{faktura.dostawcaId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Brak faktur do wyświetlenia</p>
        )}
      </div>
    </div>
  );
};

export default Finanse;
