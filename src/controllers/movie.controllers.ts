import { Request, Response } from "express";
import prisma from "../db/client";

export const createMovie = async (req: Request, res: Response) => {
  const { name, image } = req.body;
  const { userId } = req.params;
  try {
    const movie = await prisma.movies.create({
      data:{ name, image, user: { connect : {id:userId}} }
    });     
    res.status(201).send(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const allMovies = await prisma.movies.findMany({
      include:{
        genres: true
      }
    });;
    res.status(201).send(allMovies);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  const { name, image } = req.body;
  const { movieId } = req.params;

  try {
    const movieUpdated = await prisma.movies.update({
      where: {id:movieId},
      data:{name, image}
    })
    res.status(201).send(movieUpdated)
  } catch (error) {
    res.status(400).send(error)
    console.log(error)
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  try {
    const movieDeleted = await prisma.movies.delete({ 
     where: { id: movieId}
    })
    res.status(200).send(movieDeleted)
  } catch (error) {
    res.status(400).send(error)
  }

};