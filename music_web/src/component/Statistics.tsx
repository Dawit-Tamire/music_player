import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/react';
import { Flex, Box, Text } from 'rebass';
//import { fetchSongData } from '../actions';
import { RootState } from '../app/store';


const background = css`
    background-color: #eee;
`
// Define props interface
interface Props {
  //fetchSongData: () => void;
}

// Define component
const SongStatistics: React.FC<Props> = () => {
  // useEffect(() => {
  //   fetchSongData();
  // }, [fetchSongData]);

  // if (!songData) {
  //   return <div>Loading...</div>;
  // }

  // Calculate statistics
  // const totalSongs = songData.songs.length;
  // const totalArtists = new Set(songData.songs.map(song => song.artist)).size;
  // const totalAlbums = new Set(songData.songs.map(song => song.album)).size;
  // const totalGenres = new Set(songData.songs.map(song => song.genre)).size;

  // const genresCount: { [key: string]: number } = {};
  // songData.songs.forEach(song => {
  //   genresCount[song.genre] = (genresCount[song.genre] || 0) + 1;
  // });

  // const artistsCount: { [key: string]: number } = {};
  // songData.songs.forEach(song => {
  //   artistsCount[song.artist] = (artistsCount[song.artist] || 0) + 1;
  // });

  // const albumsCount: { [key: string]: number } = {};
  // songData.songs.forEach(song => {
  //   albumsCount[song.album] = (albumsCount[song.album] || 0) + 1;
  // });

  return (
    <div css={background}>
      <Flex flexDirection="column" alignItems="center" >
        <Box mb={4}>
          <Text>Total number of songs: </Text>
          <Text>Total number of artists: </Text>
          <Text>Total number of albums: </Text>
          <Text>Total number of genres: </Text>
        </Box>
        <Box mb={4}>
          <Text>Number of songs in each genre:</Text>
          {/* {Object.entries(genresCount).map(([genre, count]) => (
            <Text key={genre}>{genre}: {count}</Text>
          ))} */}
        </Box>
        <Box mb={4}>
          <Text>Number of songs & albums each artist has:</Text>
          {/* {Object.entries(artistsCount).map(([artist, count]) => (
            <Text key={artist}>{artist}: {count} songs, {albumsCount[artist]} albums</Text>
          ))} */}
        </Box>
        <Box>
          <Text>Number of songs in each album:</Text>
          {/* {Object.entries(albumsCount).map(([album, count]) => (
            <Text key={album}>{album}: {count}</Text>
          ))} */}
        </Box>
      </Flex>
    </div>
  );
};

// Map Redux state to component props
// const mapStateToProps = (state: RootState) => ({
//   songData: state.songData
// });

// Map Redux actions to component props
// const mapDispatchToProps = (dispatch: Function) => ({
//   fetchSongData: () => dispatch(fetchSongData())
// });

// Connect component to Redux store
//export default connect(mapStateToProps, mapDispatchToProps)(SongStatistics);

export default SongStatistics;
