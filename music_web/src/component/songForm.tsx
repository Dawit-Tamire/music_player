import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
//import { addSong } from '../rootSaga';
import { Card } from 'rebass';
import styled from '@emotion/styled';
import { space, color, fontSize } from 'styled-system';


const cardStyles = css`
  background-color: red;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: center;
`;

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

const SongForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //dispatch(addSong({ title }));
    setTitle('');
  };

  return (
    <div css={cardStyles}>
      <Card mx="auto" width={300} height={200}>
        <h2>Create a Song</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <br />
          <StyledInput
            placeholder="Enter title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label htmlFor="artist">Artist</label>
          <StyledInput
            placeholder="Enter artist"
            value={artist}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label htmlFor="album">Album</label>
          <StyledInput
            placeholder="Enter album"
            value={album}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label htmlFor="genre">Genre</label>
          <StyledInput
            placeholder="Enter genre"
            value={genre}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />

          <Button>Create</Button>
        </form>
      </Card>
    </div>
  );
};

export default SongForm;
