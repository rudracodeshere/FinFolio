import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/Form.module.css';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await loginUser(formData);
      navigate('/dashboard');
    } catch (err) {
      alert('Login Failed: Invalid credentials or server error.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>Welcome Back</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={email} onChange={onChange} required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={password} onChange={onChange} required className={styles.input} />
          </div>
          <button type="submit" className={styles.button}>Log In</button>
        </form>
        <p className={styles.link}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
