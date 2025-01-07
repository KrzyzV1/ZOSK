import React from 'react';
import './Raporty.css';

const Raporty = () => {
  return (
    <div className="raporty">
      <div className="container">
        <h1 className="section-title">Zaawansowane Raporty</h1>
        <p>Ta sekcja pozwala na generowanie zaawansowanych raportów finansowych.</p>
        <form className="raporty-form">
          <div className="form-group">
            <label htmlFor="reportType" className="form-label">Rodzaj raportu</label>
            <select id="reportType" name="reportType" className="form-input" required>
              <option value="">Wybierz raport</option>
              <option value="income">Przychody</option>
              <option value="expenses">Wydatki</option>
              <option value="profit">Zyski</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="startDate" className="form-label">Data początkowa</label>
            <input type="date" id="startDate" name="startDate" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="endDate" className="form-label">Data końcowa</label>
            <input type="date" id="endDate" name="endDate" className="form-input" required />
          </div>
          <button type="submit" className="raporty-btn">Generuj Raport</button>
        </form>
      </div>
    </div>
  );
};

export default Raporty;
