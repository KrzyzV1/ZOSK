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
      const response = await fetch(`${API_BASE_URL}/produkt?search=${searchTerm}`);
      const data = await response.json();

      if (data && data.length > 0) {
        setProducts(data);
        setResultTitle('Wyniki wyszukiwania');
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
    if (searchTerm) fetchProducts();
  }, [searchTerm, fetchProducts]);

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
