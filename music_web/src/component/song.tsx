import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import styled from '@emotion/styled';
import { color, fontSize, space } from 'styled-system';
import SongList from './songList';
import Sidebar from './sidebar';


const Button = styled.button`
  ${space}
  ${color}
  ${fontSize}

  background-color: tomato;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 20px 50px 20px 50px;
  float: right;
  margin-right: 10px;
  margin-bottom: 25px;
`;

const Song: React.FC = () => {

  return (
    <div>
        <h2>Songs</h2>
        <Button>Add</Button>
        <SongList />
    </div>
  );
};

export default Song;
