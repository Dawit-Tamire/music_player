import React, { PropsWithChildren, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import styled from '@emotion/styled';
import { space, color } from 'styled-system';
import { Box } from 'rebass';
import { SxProps } from "rebass";
import { css } from '@emotion/react';

const cardStyles = css`
  background-color: red;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: center;
`;

// const tableStyles = css`
//   width: 100%;
//   font-family: Arial, sans-serif;
//   margin-top: 20px;
// `;
  // th,
  // td {
  //   border: 1px solid #ddd;
  //   padding: 8px;
  //   text-align: left;
  // }

  // th {
  //   background-color: #f2f2f2;
  // }

  // tr:nth-child(even) {
  //   background-color: #f2f2f2;
  // }


const SongList: React.FC = () => {
  const { songs } = useSelector((state: RootState) => state.player.songData);

  return (
    <div css={cardStyles}>
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

