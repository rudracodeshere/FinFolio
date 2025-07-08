import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/Form.module.css';

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const { username, email, password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (err) {
      alert('Registration Failed: ' + (err.response?.data?.msg || 'Something went wrong.'));
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>Create an Account</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="username">Username</label>
            <input id="username" type="text" name="username" value={username} onChange={onChange} required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={email} onChange={onChange} required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={password} onChange={onChange} required minLength="6" className={styles.input} />
          </div>
          <button type="submit" className={styles.button}>Register</button>
        </form>
        <p className={styles.link}>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
