import React from 'react';
import { Link } from 'react-router-dom';
import './Finanse.css';

const Finanse = () => {
  return (
    <div className="finanse">
      <div className="container">
        <h1 className="section-title">Finanse</h1>
        <p className="finanse-description">
          Zarządzaj swoimi finansami, przeglądaj faktury i generuj zaawansowane raporty finansowe.
        </p>
        <div className="finanse-actions">
          <Link to="/raporty" className="finanse-btn">Zaawansowane Raporty</Link>
          <Link to="/addInvoice" className="finanse-btn">Dodaj Fakturę</Link>
        </div>
        <table className="finanse-table">
          <thead>
            <tr>
              <th>Numer Faktury</th>
              <th>Data Wystawienia</th>
              <th>Kwota</th>
              <th>Status Płatności</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {/* Przykładowe dane */}
            <tr>
              <td>12345</td>
              <td>2023-12-01</td>
              <td>1500 PLN</td>
              <td>Opłacona</td>
              <td>
                <button className="finanse-btn">Szczegóły</button>
                <button className="finanse-btn">Usuń</button>
              </td>
            </tr>
            <tr>
              <td>67890</td>
              <td>2023-12-05</td>
              <td>2300 PLN</td>
              <td>Nieopłacona</td>
              <td>
                <button className="finanse-btn">Szczegóły</button>
                <button className="finanse-btn">Usuń</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Finanse;
