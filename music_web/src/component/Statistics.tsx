import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { Flex, Box, Text } from 'rebass';
import { RootState } from '../root/config.store';
import { songActions } from '../slices/songSclice';



const SongStatistics: React.FC = () => {
  
  const dispatch = useDispatch();

  const { totalNumberOfSongs, totalNumberOfGenres, totalNumberOfAlbums, totalNumberOfArtists,
            totalNumberOfSongsAndAlbums, totalNumberOfSongsInGenre, totalNumberOfSongsInAlbum } 
            = useSelector((state: RootState) => state.song);


  useEffect(() => {
    dispatch(songActions.fetchTotalNumberOfSongsRequest())
    dispatch(songActions.fetchTotalNumberOfGenresRequest())
    dispatch(songActions.fetchTotalNumberOfAlbumRequest())
    dispatch(songActions.fetchTotalNumberOfArtistRequest())
    dispatch(songActions.fetchTotalNumberOfSongsAndAlbumRequest())
    dispatch(songActions.fetchTotalNumberOfSongsInAlbumRequest())
    dispatch(songActions.fetchTotalNumberOfSongsInGenreRequest())

  }, []);

  useEffect(() => {
    console.log("total stats", totalNumberOfSongsInGenre)

  }, [totalNumberOfSongs]);


  return (
    <div style={{width: "1350px", height: "738px", backgroundColor: "lightgray"}}>
      <h1 style={{marginLeft: "50px"}}>Statistics of Songs</h1>
      <Flex flexDirection="row" alignItems="center" mt={70}>
        <Box width="fit-content" height="fit-content" p={3} bg="white" sx={{ border: '1px solid #ccc' }} mb={4} ml={50}>
          <Text>Total number of songs: {totalNumberOfSongs.totalSongs}</Text>
          <Text>Total number of artists: {totalNumberOfGenres.totalGenres}</Text>
          <Text>Total number of albums: {totalNumberOfAlbums.totalAlbums}</Text>
          <Text>Total number of genres: {totalNumberOfArtists.totalArtists}</Text>
        </Box>
        <Box width="fit-content" height="fit-content" p={3} bg="white" sx={{ border: '1px solid #ccc' }} mb={4} ml={200} mt={50}>
          { totalNumberOfSongsInGenre.map((songsInGenre: any)  => (
            <Text>Number of songs in {songsInGenre._id}: {songsInGenre.count}</Text>
          ))}
        </Box>
      </Flex>
      <Flex flexDirection="row" alignItems="center" mt={10}>
        <Box width="fit-content" height="fit-content" p={3} bg="white" sx={{ border: '1px solid #ccc' }} mb={4} ml={50}>
          { totalNumberOfSongsAndAlbums.map((songsAndAlbums: any)  => (
            <Text>{songsAndAlbums._id} has: {songsAndAlbums.totalSongs} songs and {songsAndAlbums.albums.length} albums</Text>
          ))}
        </Box>
        <Box width="fit-content" height="fit-content" p={3} bg="white" sx={{ border: '1px solid #ccc' }} mb={4} ml={200}>
          { totalNumberOfSongsInAlbum.map((songsInAlbums: any)  => (
            <Text>Number of songs in {songsInAlbums._id} album: {songsInAlbums.totalSongs}</Text>
          ))}
        </Box>
      </Flex>
    </div>
  );
};


export default SongStatistics;
