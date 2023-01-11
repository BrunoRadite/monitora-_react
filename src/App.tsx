import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import GuardedRoute from './components/GuardedRoute';
import MenuComponent from './components/Menu/MenuComponent';
import { setDisplayMenu } from './controllers/sliceMenu';
import DashboardPage from './pages/DashboardPage';
import FormCaldeiraPage from './pages/FormCaldeiraPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  const dispatch = useDispatch();
  // dispatch(setDisplayMenu('dashboard'))
  return (
    <div className="App">
      <header className="App-header">
        <Router >
          <MenuComponent />
          <Routes >
            <Route path='/login'
              element={
                <LoginPage />
              } />
            <Route path='/'
              element={
                <GuardedRoute>
                  <HomePage />
                </GuardedRoute>
              } />
            <Route path='/dashboard'
              element={
                <GuardedRoute>
                  <DashboardPage />
                </GuardedRoute>
              } />
            <Route path='/gerenciamento'
              element={
                <GuardedRoute>
                  <HomePage />
                </GuardedRoute>
              } />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
