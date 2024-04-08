import { Schema, model } from "mongoose";

interface IMovieSchema {
    name: string,
    image: string,
    score: string | number,
    genre: string[]
    createAt?: Date,
    updateAt?: Date
}

const movieSchema = new Schema<IMovieSchema>({
    name:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    score:{
        type: String,
    },
    genre:[{
        type: Schema.Types.ObjectId, ref:"Genre"
    }],
},{ timestamps:true })

const MovieModel = model<IMovieSchema>("Movie", movieSchema)

export default MovieModel;