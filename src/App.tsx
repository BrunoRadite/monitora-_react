import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GuardedRoute from './components/GuardedRoute';
import MenuComponent from './components/Menu/MenuComponent';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import "primereact/resources/themes/lara-light-teal/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import Gerenciamento from './pages/GerenciamentoPage';
import GerenciamentoPage from './pages/GerenciamentoPage';
import G1 from './pages/g1';
import G2 from './pages/g2 copy 2';
import G3 from './pages/g2 copy 3';
import G4 from './pages/g2 copy 4';
import G20 from './pages/g2';
import G19 from './pages/g2 copy 19';
import G18 from './pages/g2 copy 18';
import G17 from './pages/g2 copy 17';
import G16 from './pages/g2 copy 16';
import G15 from './pages/g2 copy 15';
import G14 from './pages/g2 copy 14';
import G12 from './pages/g2 copy 12';
import G11 from './pages/g2 copy 11';
import G10 from './pages/g2 copy 10';
import G9 from './pages/g2 copy 9';
import G8 from './pages/g2 copy 8';
import G7 from './pages/g2 copy 7';
import G6 from './pages/g2 copy 6';
import G5 from './pages/g2 copy 5';
import G13 from './pages/g2 copy 13';

function App() {
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
                  <GerenciamentoPage />
                </GuardedRoute>
              } />
            <Route path='/g1'
              element={
                <GuardedRoute>
                  <G1 />
                </GuardedRoute>
              } />
            <Route path='/g2'
              element={
                <GuardedRoute>
                  <G2 />
                </GuardedRoute>
              } />
            <Route path='/g3'
              element={
                <GuardedRoute>
                  <G3 />
                </GuardedRoute>
              } />
            <Route path='/g4'
              element={
                <GuardedRoute>
                  <G4 />
                </GuardedRoute>
              } />
            <Route path='/g5'
              element={
                <GuardedRoute>
                  <G5 />
                </GuardedRoute>
              } />
            <Route path='/g6'
              element={
                <GuardedRoute>
                  <G6 />
                </GuardedRoute>
              } />
            <Route path='/g7'
              element={
                <GuardedRoute>
                  <G7 />
                </GuardedRoute>
              } />
            <Route path='/g8'
              element={
                <GuardedRoute>
                  <G8 />
                </GuardedRoute>
              } />
            <Route path='/g9'
              element={
                <GuardedRoute>
                  <G9 />
                </GuardedRoute>
              } />
            <Route path='/g10'
              element={
                <GuardedRoute>
                  <G10 />
                </GuardedRoute>
              } />
            <Route path='/g11'
              element={
                <GuardedRoute>
                  <G11 />
                </GuardedRoute>
              } />
            <Route path='/g12'
              element={
                <GuardedRoute>
                  <G12 />
                </GuardedRoute>
              } />
            <Route path='/g13'
              element={
                <GuardedRoute>
                  <G13 />
                </GuardedRoute>
              } />
            <Route path='/g14'
              element={
                <GuardedRoute>
                  <G14 />
                </GuardedRoute>
              } />
            <Route path='/g15'
              element={
                <GuardedRoute>
                  <G15 />
                </GuardedRoute>
              } />
            <Route path='/g16'
              element={
                <GuardedRoute>
                  <G16 />
                </GuardedRoute>
              } />
            <Route path='/g17'
              element={
                <GuardedRoute>
                  <G17 />
                </GuardedRoute>
              } />
            <Route path='/g18'
              element={
                <GuardedRoute>
                  <G18 />
                </GuardedRoute>
              } />
            <Route path='/g19'
              element={
                <GuardedRoute>
                  <G19 />
                </GuardedRoute>
              } />
            <Route path='/g20'
              element={
                <GuardedRoute>
                  <G20 />
                </GuardedRoute>
              } />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
