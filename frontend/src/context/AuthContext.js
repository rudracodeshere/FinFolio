import React, { createContext, useReducer, useEffect } from 'react';
import authService from '../services/authService';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case 'LOGOUT':
    case 'AUTH_ERROR':
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

// Get token from local storage
const token = localStorage.getItem('token');

// Set the initial state based on whether a token exists
const initialState = {
  token: token,
  isAuthenticated: !!token, // This is the magic! `!!token` becomes `true` if token exists, `false` if not.
  user: null,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const registerUser = async (userData) => {
    try {
      await authService.register(userData);
    } catch (err) {
      dispatch({ type: 'AUTH_ERROR' });
      throw err;
    }
  };

  const loginUser = async (userData) => {
    try {
      const res = await authService.login(userData);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'AUTH_ERROR' });
      throw err;
    }
  };

  const logoutUser = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
