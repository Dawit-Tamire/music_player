import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { Card } from 'rebass';
import styled from '@emotion/styled';
import { space, color, fontSize } from 'styled-system';
import { songActions } from '../slices/songSclice';
import type { Song } from '../types/types';
import { RootState } from '../root/config.store';


const StyledInput = styled.input`
  display: block;
  margin: 0px 0px;
  font-size: 10px;
  width: 200px;
  height: 30px;
  border: 1px solid lightblue;
  border-radius: 10px;
`;

const Button = styled.button`
  ${space}
  ${color}
  ${fontSize}

  background-color: tomato;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 10px;
`;


interface Props {
  add: boolean
}

const SongForm: React.FC<Props> = ({add}) => {
  const [formData, setFormData] = useState<Song>({_id: '', title: '', genre: '', album: '', artist: ''})
  const { songSclice } = useSelector((state: RootState) => state.song);
  const { song, resStatus } = songSclice;

  const dispatch = useDispatch();

  useEffect(() => {
    if(!add){
      setFormData({ ...song })
    }
  }, []);

  useEffect(() => {
    dispatch(songActions.fetchSongsRequest())
  }, [resStatus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData", formData)
    
    add 
      ? dispatch(songActions.addSongRequest(formData))
        : dispatch(songActions.updateSongRequest(formData));
      
  };

  return (
    <div>
      <Card width={300} height={450}>
        <h2 style={{marginLeft: "70px"}}>{add? "Create a Song" : "Update a Song" }</h2>
        <form onSubmit={handleSubmit} style={{marginLeft: "50px"}}>
          <label htmlFor="title">Title</label>
          <br />
          <StyledInput
            placeholder="Enter title"
            value={formData.title}
            required
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <br />

          <label htmlFor="genre">Genre</label>
          <StyledInput
            placeholder="Enter genre"
            value={formData.genre}
            required
            onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
          />
          <br />

          <label htmlFor="album">Album</label>
          <StyledInput
            placeholder="Enter album"
            value={formData.album}
            required
            onChange={(e) => setFormData({ ...formData, album: e.target.value })}
          />
          <br />

          <label htmlFor="artist">Artist</label>
          <StyledInput
            placeholder="Enter artist"
            value={formData.artist}
            required
            onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
          />
          <br />
          <br />

          <div style={{ marginLeft: "70px"}}>
            <Button>{ add ? "Create" : "Update" }</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SongForm;
