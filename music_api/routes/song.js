const express = require("express");
const router = express.Router();
const { getAllSongs,
        getSongByPk,
        createSong,
        updateSong,
        deleteSong,
        totalNumberOfSongs,
        totalNumberOfArtists,
        totalNumberOfAlbums,
        totalNumberOfGenres,
        totalNumberOfSongsAndAlbums,
        totalNumberOfSongsInGenre,
        totalNumberOfSongsInAlbum } = require("../handler/songHandler");

router.route("/").get(getAllSongs);
router.route("/:id").get(getSongByPk);
router.route("/").post(createSong);
router.route("/:id").put(updateSong);
router.route("/:id").delete(deleteSong);
router.route("/stats/songs").get(totalNumberOfSongs);
router.route("/stats/artists").get(totalNumberOfArtists);
router.route("/stats/albums").get(totalNumberOfAlbums);
router.route("/stats/genres").get(totalNumberOfGenres);
router.route("/stats/songsInGenre").get(totalNumberOfSongsInGenre);
router.route("/stats/songsAndAlbums").get(totalNumberOfSongsAndAlbums);
router.route("/stats/songsInAlbum").get(totalNumberOfSongsInAlbum);


module.exports = router;