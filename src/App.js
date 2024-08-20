import React from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import DataPage from './pages/PlayersData';
import FormPage from './pages/FormPage';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/data">Players Data</Link>
            <Link to="/form">Add a Match</Link>
          </nav>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/data" element={<DataPage />} />
              <Route path="/form" element={<FormPage />} />
            </Routes>
          </Provider>
        </div>
    </BrowserRouter>
  );
}

export default App;