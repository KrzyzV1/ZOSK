import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config';
import './EdytujProdukt.css';

const EdytujProdukt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    nazwa: '',
    kategoria: '',
    numerSeryjny: '',
    cena: '',
  });

  useEffect(() => {
    fetch(`${API_BASE_URL}/produkt/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Błąd podczas pobierania danych produktu:', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE_URL}/produkt/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then(() => {
        alert('Produkt zaktualizowany!');
        navigate('/magazyn');
      })
      .catch(err => console.error('Błąd podczas aktualizacji produktu:', err));
  };

  return (
    <div className="edytuj-produkt">
      <div className="container">
        <h1 className="section-title">Edytuj Produkt</h1>
        <form onSubmit={handleSubmit} className="edytuj-form">
          <div className="form-group">
            <label htmlFor="nazwa" className="form-label">Nazwa</label>
            <input
              type="text"
              id="nazwa"
              name="nazwa"
              value={product.nazwa}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="kategoria" className="form-label">Kategoria</label>
            <input
              type="text"
              id="kategoria"
              name="kategoria"
              value={product.kategoria}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numerSeryjny" className="form-label">Numer Seryjny</label>
            <input
              type="text"
              id="numerSeryjny"
              name="numerSeryjny"
              value={product.numerSeryjny}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cena" className="form-label">Cena</label>
            <input
              type="number"
              id="cena"
              name="cena"
              value={product.cena}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="edytuj-btn">Zaktualizuj Produkt</button>
        </form>
      </div>
    </div>
  );
};

export default EdytujProdukt;
