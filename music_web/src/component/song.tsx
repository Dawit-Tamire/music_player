import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import styled from '@emotion/styled';
import { color, fontSize, space } from 'styled-system';
import SongList from './songList';
import Sidebar from './sidebar';
import SongForm from './songForm';
import { Dialog } from '@mui/material';


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

  const [showDialog, setShowDialog] = useState(false)

  const handleOpen = () => {
    setShowDialog(true);
  }

  const handleClose = () => {
    setShowDialog(false);
  }

  return (
    <div style={{marginLeft: "10px", marginTop: "20px"}}>
      <Dialog open={showDialog} onClose={handleClose}>
        <SongForm add={true} />
      </Dialog>
      
      <h2 style={{marginLeft: "30px"}}>Songs</h2>
      <Button onClick={handleOpen}>Add</Button>
      <SongList />
    </div>
  );
};

export default Song;
