import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config';
import './DodajZamowienie.css';

const DodajZamowienie = () => {
  const [zamowienie, setZamowienie] = useState({
    dataZamowienia: '',
    status: '',
    dostawcaId: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setZamowienie((prevZamowienie) => ({
      ...prevZamowienie,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE_URL}/zamowienia`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(zamowienie),
    })
      .then(() => {
        alert('Zamówienie dodane!');
        navigate('/orders');
      })
      .catch((err) => console.error('Error adding zamówienie:', err));
  };

  return (
    <div className="dodaj-zamowienie">
      <div className="container">
        <h1 className="section-title">Dodaj Zamówienie</h1>
        <form onSubmit={handleSubmit} className="dodaj-zamowienie-form">
          <div className="form-group">
            <label htmlFor="dataZamowienia" className="form-label">Data Zamówienia</label>
            <input
              type="date"
              id="dataZamowienia"
              name="dataZamowienia"
              value={zamowienie.dataZamowienia}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status" className="form-label">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              value={zamowienie.status}
              onChange={handleChange}
              className="form-input"
              placeholder="Wprowadź status zamówienia"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dostawcaId" className="form-label">ID Dostawcy</label>
            <input
              type="number"
              id="dostawcaId"
              name="dostawcaId"
              value={zamowienie.dostawcaId}
              onChange={handleChange}
              className="form-input"
              placeholder="Wprowadź ID dostawcy"
              required
            />
          </div>
          <button type="submit" className="dodaj-btn">Dodaj Zamówienie</button>
        </form>
      </div>
    </div>
  );
};

export default DodajZamowienie;
