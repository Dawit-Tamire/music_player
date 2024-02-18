import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './app/store';
import SongList from './component/songList';
import SongForm from './component/songForm';
import Statistics from './component/Statistics';

function App() {
  return (
    <div>
      <Provider store={store}>
        <h1>Music App</h1>
        <SongList />
        <SongForm />
        <Statistics />
      </Provider>
    </div>
  );
}

export default App;
