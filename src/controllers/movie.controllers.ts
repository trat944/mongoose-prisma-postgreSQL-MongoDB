import { Request, Response } from "express";
import prisma from "../db/client";

export const createMovie = async (req: Request, res: Response) => {
	const { name, image, genre } = req.body;
	const userId = parseInt(req.params.userId);

	if (!name || !image) {
		return res
			.status(400)
			.send({ message: "The fields name and image are required" });
	}

	if (!userId) {
		return res.status(400).send({ message: "The field userId is required" });
	}

	try {
		const movie = await prisma.$transaction(async (prisma) => {
			const newMovie = await prisma.movies.create({
				data: {
					name: name,
					image: image,
					userId: userId,
				},
			});

			if (genre && genre.length) {
				const createGenres = genre.map((genreId: number) => ({
					movieId: newMovie.id,
					genreId: genreId,
				}));

				await prisma.movieGenre.createMany({
					data: createGenres,
				});
			}

			return prisma.movies.findUnique({
				where: {
					id: newMovie.id,
				},
				include: {
					genres: true,
				},
			});
		});

		res.status(201).send({
			msg: "Movie created successfully",
			data: movie,
			typeof: typeof movie,
		});
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
	const { name, image, genre } = req.body;
	const movieId = parseInt(req.params.movieId);

	if (!movieId) {
		return res.status(400).send({ message: "The field userId is required" });
	}

	try {
		const movie = await prisma.$transaction(async (prisma) => {
			const newMovie = await prisma.movies.update({
        where: {
          id: movieId
        },
				data: {
					name: name,
					image: image,
				},
			});

			if (genre && genre.length) {
				const createGenres = genre.map((genreId: number) => ({
					movieId: newMovie.id,
					genreId: genreId,
				}));

				await prisma.movieGenre.createMany({
					data: createGenres,
				});

        await prisma.movieGenre.deleteMany({
          where: {
            movieId: movieId
          }
        })
			}


			return prisma.movies.findUnique({
				where: {
					id: newMovie.id,
				},
				include: {
					genres: true,
				},
			});
		});

		res.status(201).send({
			msg: "Movie created successfully",
			data: movie,
			typeof: typeof movie,
		});
	} catch (error) {
		res.status(400).send(error);
	}
};



export const deleteMovie = async (req: Request, res: Response) => {
  const  movieId  = parseInt(req.params.movieId);
  try {
    const movieDeleted = await prisma.movies.delete({ 
     where: { id: movieId}
    })
    res.status(200).send(movieDeleted)
  } catch (error) {
    res.status(400).send(error)
  }

};