import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState(''); // Nowe pole 'username'
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Form validation
    if (!email || !password || !confirmPassword || !username) {
      setError('Wszystkie pola są wymagane.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Hasła muszą się zgadzać.');
      return;
    }

    // Simulate registration (You can connect to a backend for real registration logic)
    if (email && password) {
      navigate('/dashboard');
    } else {
      setError('Wystąpił błąd podczas rejestracji.');
    }
  };

  return (
    <section className="register-section">
      <div className="container flex flex-c">
        <div className="register-card">
          <h2 className="text-center text-uppercase fw-6">Zarejestruj się</h2>
          {error && <p className="error-message">{error}</p>}
          <form className="register-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="username">Nazwa użytkownika:</label>
              <input
                type="text"
                id="username"
                placeholder="Wprowadź nazwę użytkownika"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Wprowadź email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Hasło:</label>
              <input
                type="password"
                id="password"
                placeholder="Wprowadź hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Potwierdź Hasło:</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Potwierdź hasło"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary bg-purple text-white">
              Zarejestruj
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
