import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import type { Song } from '../types/types';
import { songActions } from '../slices/songSclice';
import type { RootState } from '../root/config.store';
import { color, fontSize, space } from 'styled-system';
import { Dialog } from '@mui/material';
import SongForm from './songForm';

const Table = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const HeaderRow = styled.div`
  width: 165vh;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: gray;
`;

const DataRow = styled.div`
  width: 165vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const Cell = styled.div`
  padding: 8px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  ${space}
  ${color}
  ${fontSize}

  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;
`;


const SongList: React.FC = () => {

  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.song.songs);
  
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    dispatch(songActions.fetchSongsRequest())
  }, []);
 
  const handleEdit = (song: Song) => {
    console.log("id", song)
    dispatch(songActions.addSong(song))
  };

  const handleDelete = (id: string) => {
    dispatch(songActions.deleteSongRequest(id))
  };

  const handleOpen = () => {
    setShowDialog(true);
  }

  const handleClose = () => {
    setShowDialog(false);
  }

  
  return (
    <div>
      <Dialog open={showDialog} onClose={handleClose}>
        <SongForm add={false} />
      </Dialog>
      <Table>
        <HeaderRow>
          <Cell>Title</Cell>
          <Cell>Genre</Cell>
          <Cell>Artist</Cell>
          <Cell>Album</Cell>
          <Cell></Cell>
        </HeaderRow>
        {songs.length !== 0 && songs.map((song: any) => (
          <DataRow> 
            <Cell>{song.title}</Cell>
            <Cell>{song.genre}</Cell>
            <Cell>{song.artist}</Cell>
            <Cell>{song.album}</Cell>
            <Cell>
              <Button onClick={() => { handleOpen(); handleEdit(song)}}>Edit</Button>
              <Button onClick={() => handleDelete(song._id)}>Delete</Button>
            </Cell>
          </DataRow>
        ))}
        
      </Table>
    </div>
  );
};

export default SongList;
