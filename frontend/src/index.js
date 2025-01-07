import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Magazyn from "./pages/Magazyn/Magazyn";  
import Finanse from "./pages/Finanse/Finanse";
import Sprzedaz from "./pages/Sprzedaz/Sprzedaz";  
import Zamowienia from "./pages/Zamowienia/Zamowienia"; 
import DodajProdukt from './pages/DodajProdukt/DodajProdukt';
import DodajZamowienie from './pages/Zamowienia/DodajZamowienie';
import Raporty from './pages/Finanse/Raporty'; 
import DodajFakture from './pages/Finanse/DodajFakture';
import Produkty  from './components/Produkty/Produkty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="warehouse" element={<Magazyn />} />
          <Route path="finance" element={<Finanse />} />
          <Route path="orders" element={<Zamowienia />} />
          <Route path="sales" element={<Sprzedaz />} />
          <Route path="addProduct" element={<DodajProdukt />} />
          <Route path="addOrder" element={<DodajZamowienie />} />
          <Route path="raporty" element={<Raporty />} /> 
          <Route path="addInvoice" element={<DodajFakture />} />
          <Route path="products" element={<Produkty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
