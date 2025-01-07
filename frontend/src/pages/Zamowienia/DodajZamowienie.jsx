import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config';
import './DodajZamowienie.css';

const DodajZamowienie = () => {
  const [zamowienie, setZamowienie] = useState({
    dataZamowienia: '',
    status: '',
    dostawcaId: '',
  });

  const [dostawcy, setDostawcy] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/dostawcy`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setDostawcy(data);
        } else {
          console.error('API returned unexpected response format:', data);
        }
      })
      .catch((err) => console.error('Error fetching suppliers:', err));
  }, []);

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
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        alert('Zamówienie dodane!');
        navigate('/orders');
      })
      .catch((err) => {
        console.error('Error adding order:', err);
        alert('Wystąpił błąd podczas dodawania zamówienia.');
      });
  };

  return (
    <div className="dodaj-zamowienie">
      <div className="container">
        <h1 className="section-title">Dodaj Zamówienie</h1>
        <form onSubmit={handleSubmit} className="dodaj-form">
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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dostawcaId" className="form-label">Dostawca</label>
            <select
              id="dostawcaId"
              name="dostawcaId"
              value={zamowienie.dostawcaId}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Wybierz dostawcę</option>
              {dostawcy.map((dostawca) => (
                <option key={dostawca.dostawcaId} value={dostawca.dostawcaId}>
                  {dostawca.nazwaFirmy}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="dodaj-btn">Dodaj Zamówienie</button>
        </form>
      </div>
    </div>
  );
};

export default DodajZamowienie;
