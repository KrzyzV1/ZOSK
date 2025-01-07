import React, { useState, useContext, useEffect, useCallback } from 'react';
import API_BASE_URL from './config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState('');

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const url = searchTerm
        ? `${API_BASE_URL}/produkt?search=${searchTerm}`
        : `${API_BASE_URL}/produkt`;

      const response = await fetch(url);
      const data = await response.json();

      if (data && data.length > 0) {
        setProducts(data);
        setResultTitle(searchTerm ? 'Wyniki wyszukiwania' : 'Lista produktów');
      } else {
        setProducts([]);
        setResultTitle('Brak wyników');
      }
    } catch (error) {
      console.error('Błąd pobierania danych:', error);
      setProducts([]);
      setResultTitle('Błąd wyszukiwania');
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <AppContext.Provider value={{ loading, products, setSearchTerm, resultTitle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
