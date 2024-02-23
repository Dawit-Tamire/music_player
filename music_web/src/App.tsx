import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { store } from './app/store';
import SongList from './component/songList';
import SongForm from './component/songForm';
import Statistics from './component/Statistics';
import Sidebar from './component/sidebar';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index element={<Sidebar />} />
          <Route path="/list" element={<SongList />} />
          <Route path="/song" element={<SongForm />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
