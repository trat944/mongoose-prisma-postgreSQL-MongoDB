import { Request, Response } from "express";
import prisma from "../db/client";

export const createGenre = async (req: Request, res: Response) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).send({ message: "The field name is required" });
	}
	try {
		const genre = await prisma.genre.create({
			data: {
				name: name,
			},
		});
		res.status(201).send({
			type: typeof genre,
			msg: "Genre created successfully",
			data: genre,
		});
	} catch {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

export const getAllGenres = async (req: Request, res: Response) => {
  try {
    const allGenres = await prisma.genre.findMany();
    res.status(201).send(allGenres);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateGenre = async (req: Request, res: Response) => {
  const { name } = req.body;
  const  genreId  = parseInt(req.params.genreId);

  try {
    const genreUpdated = await prisma.genre.update({
      where: {id:genreId},
      data:{name}
    })
    res.status(201).send(genreUpdated)
  } catch (error) {
    res.status(400).send(error)
    console.log(error)
  }
};

export const deleteGenre = async (req: Request, res: Response) => {
  const  genreId  = parseInt(req.params.genreId);
  try {
    const genreDeleted = await prisma.genre.delete({ 
     where: { id: genreId}
    })
    res.status(200).send(genreDeleted)
  } catch (error) {
    res.status(400).send(error)
  }

};