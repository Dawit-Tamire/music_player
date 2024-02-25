import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
//import getSongs from '../services/song.api';
import { Song } from '../types/types';
import { songActions } from '../slices/songSclice';
import type { RootState } from '../root/config.store';

const Table = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const HeaderRow = styled.div`
  width: 165vh;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: gray;
`;

const DataRow = styled.div`
  width: 165vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Cell = styled.div`
  padding: 8px;
  border: 1px solid #ddd;
`;

const SongList: React.FC = () => {

  const dispatch = useDispatch();
  const [songState, setSongState] = useState<Song | Song[]>(null || []);
  const songSlice = useSelector((state: RootState) => state.song);
  const { data } = songSlice;
    
  useEffect(() => {
    console.warn("fetch songs")
    dispatch(songActions.fetchSongsRequest())
  }, []);

  useEffect(() => {
    setSongState(data)
  }, [data]);

  
  // const handleEdit = (id: string) => {
  //   try {
  //     const songResult = await getSongs(); // Call your async function
  //     setSongState(songResult); // Update state with the fetched data
  //   } catch (error) {
  //     console.error('Error fetching song data:', error);
  //   }
  // };

  // const handledelete = (id: string) => {
  //   try {
  //     const songResult = await getSongs(); // Call your async function
  //     setSongState(songResult); // Update state with the fetched data
  //   } catch (error) {
  //     console.error('Error fetching song data:', error);
  //   }
  // };


  useEffect(() => {
    console.log("songState", songState)
  }, [songState]);
  
  return (
    <div>
      <Table>
        <HeaderRow>
          <Cell>Title</Cell>
          <Cell>Genre</Cell>
          <Cell>Artist</Cell>
          <Cell>Album</Cell>
          <Cell>Album</Cell>
        </HeaderRow>
        {/* {songState.length === 0 && songState.map((song: any) => (
          <DataRow> 
            <Cell>{song.title}</Cell>
            <Cell>{song.genre}</Cell>
            <Cell>{song.artist}</Cell>
            <Cell>{song.album}</Cell>
            <Cell><button onClick={() => handleEdit(song._id)}>Edit</button></Cell>
            <Cell><button onClick={() => handleDelete(song._id)}>Delete</button></Cell>
          </DataRow>
        ))} */}
        
      </Table>
    </div>
  );
};

export default SongList;
