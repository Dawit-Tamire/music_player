const moongose = require('mongoose')

// Define a schema for the song model
const songSchema = new moongose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    }
});

const Song = moongose.model('Song', songSchema);

module.exports = Song;
