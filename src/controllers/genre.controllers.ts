import { Request, Response } from "express";
import MovieModel from "../models/movie.model";
import GenreModel from "../models/genre.model";

export const createGenre = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { movieId } = req.params;
  try {
    const genre = await GenreModel.create({ name });
    await MovieModel.findByIdAndUpdate(
        { _id: movieId }, 
        { $push: {genre: genre._id}});
        
    res.status(201).send(genre);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllGenres = async (req: Request, res: Response) => {
  try {
    const allGenres = await GenreModel.find();
    res.status(201).send(allGenres);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateGenre = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { genreId } = req.params;

  try {
    const genreUpdated = await GenreModel.findByIdAndUpdate(
      { _id: genreId },
      { name },
      { new: true }
    )
    res.status(201).send(genreUpdated)
  } catch (error) {
    res.status(400).send(error)
    console.log(error)
  }
};

export const deleteGenre = async (req: Request, res: Response) => {
  const { genreId } = req.params;
  try {
    const GenreDeleted = await GenreModel.findByIdAndDelete( { _id: genreId})
    res.status(200).send(GenreDeleted)
  } catch (error) {
    res.status(400).send(error)
  }
};