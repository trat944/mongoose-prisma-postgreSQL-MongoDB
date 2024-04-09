import { Router } from "express";
import { createMovie, deleteMovie, getAllMovies, updateMovie } from "../controllers/movie.controllers";
import { createGenre, deleteGenre, getAllGenres, updateGenre } from "../controllers/genre.controllers";

const genreRoutes = Router();

genreRoutes.get("/", getAllGenres)
genreRoutes.post("/:movieId", createGenre)
genreRoutes.patch("/:genreId", updateGenre)
genreRoutes.delete("/:genreId", deleteGenre)

export default genreRoutes;