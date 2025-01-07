import React, { useRef, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from '../../context';
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchText = useRef('');

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchText.current.value.trim();

    if (searchTerm.length > 0) {
      setSearchTerm(searchTerm); // Aktualizujemy frazę wyszukiwania
    } else {
      alert("Wprowadź nazwę produktu do wyszukiwania.");
    }
  };

  return (
    <div className="search-form">
      <div className="container">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-form-elem flex flex-sb bg-white">
            <input type="text" className="form-control" placeholder="Wyszukaj produkt" ref={searchText} />
            <button type="submit" className="flex flex-c">
              <FaSearch className="text-purple" size={32} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
