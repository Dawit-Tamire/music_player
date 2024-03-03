//import config from 'react-native-config';
import makeApi from '../libs/axios/api';
import { type  Song } from '../types/types';

const api = makeApi('http://localhost:5000');

//const ADD_PATH = '/song';

export const getSongs = async (): Promise<Song[]> => await api.get('/song');
export const createSong = async (songData: Song): Promise<Song> => await api.post('/song', songData);
export const updateSong = async (songData: Song): Promise<Song> => await api.put(`/song/${songData._id}`, songData);
export const deleteSong = async (id: string): Promise<Song> => await api.delete(`/song/${id}`);
export const getTotalNumberOfSongs = async (): Promise<any> => await api.get('/song/stats/songs');
export const getTotalNumberOfArtists = async (): Promise<any> => await api.get('/song/stats/artists');
export const getTotalNumberOfAlbums = async (): Promise<any> => await api.get('/song/stats/albums');
export const getTotalNumberOfGenres = async (): Promise<any> => await api.get('/song/stats/genres');
export const getTotalNumberOfSongsInGenre = async (): Promise<any> => await api.get('/song/stats/songsInGenre');
export const getTotalNumberOfSongsAndAlbums = async (): Promise<any> => await api.get('/song/stats/songsAndAlbums');
export const getTotalNumberOfSongsInAlbum = async (): Promise<any> => await api.get('/song/stats/songsInAlbum');
