import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config';
import './DodajFakture.css';

const DodajFakture = () => {
  const [faktura, setFaktura] = useState({
    numerFaktury: '',
    dataWystawienia: '',
    kwota: '',
    statusPlatnosci: '',
    klientId: '',
    dostawcaId: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaktura((prevFaktura) => ({
      ...prevFaktura,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE_URL}/faktury`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(faktura),
    })
      .then(() => {
        alert('Faktura dodana!');
        navigate('/finance');
      })
      .catch((err) => console.error('Error adding invoice:', err));
  };

  return (
    <div className="dodaj-fakture">
      <div className="container">
        <h1 className="section-title">Dodaj Fakturę</h1>
        <form onSubmit={handleSubmit} className="dodaj-form">
          <div className="form-group">
            <label htmlFor="numerFaktury" className="form-label">Numer Faktury</label>
            <input
              type="text"
              id="numerFaktury"
              name="numerFaktury"
              value={faktura.numerFaktury}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dataWystawienia" className="form-label">Data Wystawienia</label>
            <input
              type="date"
              id="dataWystawienia"
              name="dataWystawienia"
              value={faktura.dataWystawienia}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="kwota" className="form-label">Kwota</label>
            <input
              type="number"
              id="kwota"
              name="kwota"
              value={faktura.kwota}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="statusPlatnosci" className="form-label">Status Płatności</label>
            <select
              id="statusPlatnosci"
              name="statusPlatnosci"
              value={faktura.statusPlatnosci}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Wybierz status</option>
              <option value="Zapłacono">Zapłacono</option>
              <option value="Nie zapłacono">Nie zapłacono</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="klientId" className="form-label">ID Klienta</label>
            <input
              type="number"
              id="klientId"
              name="klientId"
              value={faktura.klientId}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dostawcaId" className="form-label">ID Dostawcy</label>
            <input
              type="number"
              id="dostawcaId"
              name="dostawcaId"
              value={faktura.dostawcaId}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="dodaj-btn">Dodaj Fakturę</button>
        </form>
      </div>
    </div>
  );
};

export default DodajFakture;
