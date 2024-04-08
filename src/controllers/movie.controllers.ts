import { Request, Response } from "express";
import MovieModel from "../models/movie.model";
import UserModel from "../models/user.model";

export const createMovie = async (req: Request, res: Response) => {
  const { name, image } = req.body;
  const { userId } = req.params;
  try {
    const movie = await MovieModel.create({ name, image });
    await UserModel.findByIdAndUpdate(
        { _id: userId }, 
        { $push: {movies: movie._id}});
        
    res.status(201).send(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const allMovies = await MovieModel.find().populate('genre');
    res.status(201).send(allMovies);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  const { name, image } = req.body;
  const { movieId } = req.params;

  try {
    const movieUpdated = await MovieModel.findByIdAndUpdate(
      { _id: movieId },
      { name, image },
      { new: true }
    )
    res.status(201).send(movieUpdated)
  } catch (error) {
    res.status(400).send(error)
    console.log(error)
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  try {
    const movieDeleted = await MovieModel.findByIdAndDelete( { _id: movieId})
    res.status(200).send(movieDeleted)
  } catch (error) {
    res.status(400).send(error)
  }
};