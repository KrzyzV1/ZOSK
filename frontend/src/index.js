import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Magazyn from "./pages/Magazyn/Magazyn";  // Nowa strona
import Finanse from "./pages/Finanse/Finanse";
import Zamowienia from "./pages/Sprzedaz/Sprzedaz";  // Nowa strona
import Sprzedaz from "./pages/Zamowienia/Zamowienia";  // Nowa strona
import DodajProdukt from './pages/DodajProdukt/DodajProdukt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="warehouse" element={<Magazyn />} />
          <Route path="finance" element={<Finanse />} />
          <Route path="orders" element={<Zamowienia />} />
          <Route path="sales" element={<Sprzedaz />} />
          <Route path="addProduct" element={<DodajProdukt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
