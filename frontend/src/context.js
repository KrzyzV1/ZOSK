import React, { useState, useContext, useEffect } from 'react';
import API_BASE_URL from './config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      fetchProducts(searchTerm);
    }
  }, [searchTerm]);

  const fetchProducts = async (term) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/produkt?nazwa=${term}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ products, loading, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
