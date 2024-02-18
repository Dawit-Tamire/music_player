import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import styled from '@emotion/styled';
import { space, color } from 'styled-system';
import { Box } from 'rebass';
import { SxProps } from "rebass";

// Define a custom component for displaying a song item
const SongItem = styled(Box)<PropsWithChildren<SxProps>>`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SongList: React.FC = () => {
  const { songs } = useSelector((state: RootState) => state.player.songData);

  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songs.map((song: any) => (
            <SongItem key={song.id} p={2} color="primary">
                {song.title}
            </SongItem>
        ))}
      </ul>
    </div>
  );
};

export default SongList;

