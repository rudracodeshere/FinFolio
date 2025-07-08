import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// --- Import All New Landing Page Components ---
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

// --- Import Your EXISTING, WORKING App Components ---
import { AuthContext, AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import ChartPage from './pages/ChartPage';
import Login from './pages/Login';
import Register from './pages/Register';

// This component groups all the public landing page sections together
const HomePage = () => (
  <>
    <HeroSection />
    <Features />
    <HowItWorks />
    <CTA />
  </>
);

// This is a special component to protect routes that require a user to be logged in
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// This component contains all the logic for switching between public and private views
function AppContent() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      {/* Conditionally render the correct header/navbar */}
      {isAuthenticated ? <Navbar /> : <Header />}

      <main>
        <Routes>
          {/* --- Public Routes --- */}
          {/* If logged out, the home page is the full HomePage. If logged in, it's the Dashboard. */}
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <HomePage />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* --- Protected Routes (Require Login) --- */}
          <Route
            path="/dashboard"
            element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}
          />
          <Route
            path="/portfolio"
            element={<ProtectedRoute> <Portfolio /> </ProtectedRoute>}
          />
          <Route
            path="/chart/:ticker"
            element={<ProtectedRoute> <ChartPage /> </ProtectedRoute>}
          />

          {/* A fallback for any other path */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {/* Only show the big Footer if the user is logged out */}
      {!isAuthenticated && <Footer />}
    </Router>
  );
}

// The final App component that provides the authentication state to everything
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
