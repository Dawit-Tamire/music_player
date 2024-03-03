import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { store } from './root/config.store';
import SongList from './component/songList';
import SongForm from './component/songForm';
import Statistics from './component/Statistics';
import Sidebar from './component/sidebar';
import { Provider } from 'react-redux';
import Song from './component/song';
import styled from '@emotion/styled';
import Home from './component/home';


const Container = styled.div`
  width: 100%;
  display: flex;
  margin: -8px;
`;

const RouteContainer = styled.div`
  width: 100%;
  float: left;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <Sidebar />
            <RouteContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/song" element={<Song />} />
                <Route path="/statistics" element={<Statistics />} />
              </Routes>
            </RouteContainer>
          </Container>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
