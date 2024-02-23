import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import styled from '@emotion/styled';
import { space, color } from 'styled-system';
import { Box } from 'rebass';
import { SxProps } from "rebass";
import { css } from '@emotion/react';

const inputStyles = css`
  padding: 16px;
  border-radius: 8px;
`;

const table = css`
  border-collapse: collapse;
  width: 100%;
`

// th, td {
//   text-align: left;
//   padding: 8px;
// }

// tr:nth-child(even){background-color: #f2f2f2}

// th {
//   background-color: #04AA6D;
//   color: white;
// }

const SongList: React.FC = () => {
  const { songs } = useSelector((state: RootState) => state.player.songData);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song: any) => (
            <tr>
              <td>{song.title}</td>
              <td>{song.genre}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default SongList;

