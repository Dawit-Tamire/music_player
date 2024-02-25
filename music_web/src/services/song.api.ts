//import config from 'react-native-config';
import makeApi from '../libs/axios/api';
import { type  Song } from '../types/types';

const api = makeApi('http://localhost:5000');

//const ADD_PATH = '/song';

export const getSongs = async (): Promise<Song[]> => await api.get('/song');
export const createSong = async (): Promise<Song> => await api.post('/song');
export const updateSong = async (id: string): Promise<Song> => await api.put(`/song/${id}`);
export const deleteSong = async (id: string): Promise<Song> => await api.delete(`/song/${id}`);
export const getTotalNumberOfSongs = async (): Promise<Song> => await api.get('/stats/songs');
export const getTotalNumberOfArtists = async (): Promise<Song> => await api.get('/stats/artists');
export const getTotalNumberOfAlbums = async (): Promise<Song> => await api.get('/stats/albums');
export const getTotalNumberOfGenres = async (): Promise<Song> => await api.get('/stats/genres');
export const getTotalNumberOfSongsInGenre = async (): Promise<Song> => await api.get('/stats/songsInGenre');
export const getTotalNumberOfSongsAndAlbums = async (name: string): Promise<Song> => await api.get(`/stats/songsAndAlbums/${name}`);
export const getTotalNumberOfSongsInAlbum = async (id: string): Promise<Song> => await api.get(`/stats/${id}`);
