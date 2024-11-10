import React, { useState } from 'react';
import './SignupComponent.css';  

const SignupComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [position, setPosition] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    if (!position) newErrors.position = 'Position is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', { name, email, phone, position, password });
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={togglePasswordVisibility} className="show-hide-btn">
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="position">Choose Position</label>
          <select
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          >
            <option value="">Select Position</option>
            <option value="admin">Admin</option>
            <option value="sales_manager">Sales Manager</option>
            <option value="hr_department">HR Department</option>
            <option value="labour">Labour</option>
          </select>
          {errors.position && <div className="error">{errors.position}</div>}
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupComponent;


