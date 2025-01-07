import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config';
import './DodajProdukt.css';

const DodajProdukt = () => {
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    location: '',
    productId: '',
  });
  const [productList, setProductList] = useState([]); // Domyślnie tablica
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/produkt`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProductList(data); // Ustawienie danych, jeśli są tablicą
        } else {
          console.error('API returned unexpected response format:', data);
          setProductList([]); // Domyślna wartość, jeśli dane nie są tablicą
        }
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setProductList([]); // Obsługa błędu
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE_URL}/stan_magazynowy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        alert('Produkt dodany!');
        navigate('/warehouse');
      })
      .catch((err) => {
        console.error('Error adding product:', err);
        alert('Wystąpił błąd podczas dodawania produktu.');
      });
  };

  return (
    <div className="dodaj-produkt">
      <div className="container">
        <h1 className="section-title">Dodaj Produkt</h1>
        <form onSubmit={handleSubmit} className="dodaj-form">
          <div className="form-group">
            <label htmlFor="productId" className="form-label">Wybierz Produkt</label>
            <select
              id="productId"
              name="productId"
              value={product.productId}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Wybierz produkt</option>
              {productList.map((item) => (
                <option key={item.produktId} value={item.produktId}>
                  {item.nazwa}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity" className="form-label">Ilość</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" className="form-label">Lokalizacja</label>
            <input
              type="text"
              id="location"
              name="location"
              value={product.location}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="dodaj-btn">Dodaj Produkt</button>
        </form>
      </div>
    </div>
  );
};

export default DodajProdukt;
