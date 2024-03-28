import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { Flex, Box, Text } from 'rebass';
import { RootState } from '../root/config.store';
import { songActions } from '../slices/songSclice';
import type { Song } from '../types/types';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styled from '@emotion/styled';


const Container = styled.div`
    width: "1350px", 
    height: "738px", 
    backgroundColor: "lightgray"
`;

const PieContainer = styled.div`
    margin-left: 10px
`;

const SongStatistics: React.FC = () => {
  
  const dispatch = useDispatch();
  const { totalNumberOfSongs, totalNumberOfGenres, totalNumberOfAlbums, totalNumberOfArtists,
    totalNumberOfSongsAndAlbums, totalNumberOfSongsInGenre, totalNumberOfSongsInAlbum } 
    = useSelector((state: RootState) => state.song);
    
  const [data, setData] = useState<any>(null)

  ChartJS.register(ArcElement, Tooltip, Legend);
  


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

  const dynamicColors = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  };

  const songsAndAlbumsColorArray = totalNumberOfSongsAndAlbums.map(() => dynamicColors());
  const songsInGenreColorArray = totalNumberOfSongsInGenre.map(() => dynamicColors());
  const songsInAlbumColorArray = totalNumberOfSongsInAlbum.map(() => dynamicColors());


  return (
    <Container>
      <h1 style={{marginLeft: "50px"}}>Statistics of Songs</h1>
      <Flex flexDirection="row" alignItems="center" mt={70}>
        <Box width="fit-content" height="fit-content" p={3} bg="pink" sx={{ border: '1px solid #ccc' }} mb={4} ml={50}>
          <Text>Total number of songs: {totalNumberOfSongs.totalSongs}</Text>
          <Text>Total number of artists: {totalNumberOfGenres.totalGenres}</Text>
          <Text>Total number of albums: {totalNumberOfAlbums.totalAlbums}</Text>
          <Text>Total number of genres: {totalNumberOfArtists.totalArtists}</Text>
        </Box>
      </Flex>
      <Flex flexDirection="row">
        <PieContainer>
          <Pie data={{
            labels: totalNumberOfSongsAndAlbums.map((songsAndAlbums: any)=>{ return songsAndAlbums._id }),
            datasets: [
              {
                data: totalNumberOfSongsAndAlbums.map((songsAndAlbums: any)=>{ return songsAndAlbums.totalSongs }),
                backgroundColor: songsAndAlbumsColorArray,
                hoverBackgroundColor: songsAndAlbumsColorArray,
              }],
            }} />
            <p>Figure 1: Total Number Of Songs And Albums</p>
        </PieContainer>
        <PieContainer>
          <Pie data={{
            labels: totalNumberOfSongsInGenre.map((songsInGenre: any)=>{ return songsInGenre._id }),
            datasets: [
              {
                data: totalNumberOfSongsInGenre.map((songsInGenre: any)=>{ return songsInGenre.count }),
                backgroundColor: songsInGenreColorArray,
                hoverBackgroundColor: songsInGenreColorArray,
              }],
          }} />
          <p>Figure 2: Total Number Of Songs In Genre</p>
        </PieContainer>
        <PieContainer>
          <Pie data={{
            labels: totalNumberOfSongsInAlbum.map((songsInAlbum: any)=>{ return songsInAlbum._id }),
            datasets: [
              {
                data: totalNumberOfSongsInAlbum.map((songsInAlbum: any)=>{ return songsInAlbum.totalSongs }),
                backgroundColor: songsInGenreColorArray,
                hoverBackgroundColor: songsInGenreColorArray,
              }],
          }} />
          <p>Figure 3: Total Number Of Songs In Album</p>
        </PieContainer>
      </Flex>       
    </Container>
  );
};


export default SongStatistics;
