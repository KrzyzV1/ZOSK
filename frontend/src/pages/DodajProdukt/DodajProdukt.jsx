import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DodajProdukt.css';

const DodajProdukt = () => {
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    location: '',
    productId: '',  // Dodano pole productId
  });
  const [productList, setProductList] = useState([]); // Lista produktów
  const navigate = useNavigate();

  // Funkcja do pobrania produktów (można zastąpić odpowiednim API)
  useEffect(() => {
    fetch('/produkty')  // Załóżmy, że to jest endpoint API dla produktów
      .then((res) => res.json())
      .then((data) => setProductList(data))
      .catch((err) => console.error(err));
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

    fetch('/stan_magazynowy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then(() => {
        alert('Produkt dodany!');
        navigate('/magazyn'); // Redirect after submit
      })
      .catch((err) => console.error(err));
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
                <option key={item.id} value={item.id}>
                  {item.name}
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