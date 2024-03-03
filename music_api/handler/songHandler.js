const express = require('express');
const mongoose = require('mongoose');
const Song = require('../model/song');

// Create a song
const createSong = async (req, res) => {
    try {
        const { title, artist, genre, album } = req.body;
        console.log("req.body", req.body)
        const newSong = new Song({ title, artist, genre, album });
        const savedSong = await newSong.save();
        res.status(200).json(savedSong);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// List all songs
const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// List all songs
const getSongByPk = async (req, res) => {
    const { id } = req.params;

    try {
        const songs = await Song.findOne({ id: id});
        res.status(200).json(songs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a song
const updateSong = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, artist, genre, album } = req.body;
        const updatedSong = await Song.findByIdAndUpdate(id, { title, artist, genre, album }, { new: true });
        res.status(200).json(updatedSong);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Remove a song
const deleteSong = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("deleteSong", id)
        await Song.findByIdAndDelete(id);
        res.status(200).json({ message: 'Song deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Total number of songs
const totalNumberOfSongs =  async (req, res) => {
    try {
        const totalSongs = await Song.countDocuments();

        res.status(200).json({ totalSongs });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Total number of artists
const totalNumberOfArtists = async (req, res) => {
    try {
        const uniqueArtists = await Song.distinct('artist');
        const totalArtists = uniqueArtists.length;
        res.status(200).json({ totalArtists });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Total number of albums
const totalNumberOfAlbums = async (req, res) => {
    try {
        const uniqueAlbums = await Song.distinct('album');
        const totalAlbums = uniqueAlbums.length;

        res.status(200).json({ totalAlbums });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Total number of genres
const totalNumberOfGenres = async (req, res) => {
    try {
        const uniqueGenres = await Song.distinct('genre');
        const totalGenres = uniqueGenres.length;

        res.status(200).json({ totalGenres });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Number of songs in every genre
const totalNumberOfSongsInGenre = async (req, res) => {
    try {
        const genreSongs = await Song.aggregate([
            { $group: { _id: '$genre', count: { $sum: 1 } } }
        ]);
        res.status(200).json(genreSongs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Number of songs and albums of an artist
const totalNumberOfSongsAndAlbums = async (req, res) => {

    try {
        const artists = await Song.aggregate([
            {
                $group: {
                    _id: '$artist',
                    totalSongs: { $sum: 1 },
                    albums: { $addToSet: '$album' }
                }
            }
        ]);
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Number of songs in album
const totalNumberOfSongsInAlbum = async (req, res) => {
    try {
        const albums = await Song.aggregate([
            {
                $group: {
                    _id: '$album',
                    totalSongs: { $sum: 1 }
                }
            }
        ]);
        res.json(albums);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllSongs,
    getSongByPk,
    createSong,
    updateSong,
    deleteSong,
    totalNumberOfSongs,
    totalNumberOfArtists,
    totalNumberOfAlbums,
    totalNumberOfGenres,
    totalNumberOfSongsInGenre,
    totalNumberOfSongsAndAlbums,
    totalNumberOfSongsInAlbum,
};
