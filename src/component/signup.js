// src/components/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'; // Import CSS

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    const newErrors = {};
    if (!/^[A-Za-z]+$/.test(name)) {
      newErrors.name = 'Name must contain only alphabets';
    }
    if (username === password) {
      newErrors.username = 'Username and password should not be the same';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      newErrors.email = 'Email must be a valid Gmail address';
    }
    if (!/^\+\d{1,3}\s?\d{1,14}$/.test(phone)) {
      newErrors.phone = 'Phone must contain a valid country code and number';
    }

    if (Object.keys(newErrors).length === 0) {
      navigate('/login');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
