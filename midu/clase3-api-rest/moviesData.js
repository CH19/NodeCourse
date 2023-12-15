// anadimos zod en el proyecto para validar el tipo de objeto que envia un usuario 

const z = require('zod');
const movieSchema = z.object({
    title: z.string({
      invalid_type_error: 'Movie title must string',
      required_error: 'The title is required'
    }),
    year: z.number().int().min(1910).max(new Date().getFullYear() + 1),
    director: z.string(),
    duration: z.number({
      invalid_type_error: 'the duration is a number'
    }).int().positive({
      message: 'the time of the movie ats positive'
    }),
    poster: z.string({
      invalid_type_error: 'The poster need a string'
    }).url(),
    genre: z.array(
      z.enum(['action', 'adventure','comedy', 'drama','fantasy','horror','thriller', 'biography' ], {
        invalid_type_error: 'movie type as incorrect',
        ignoreCase: true
    }),
    ),
    rate: z.number().nonnegative().max(10, {
        message: 'This number is more of the max'
    }).default(1),
  });
  function validateMovie(object){
    // usamos este metodo para validar la movie 
    return movieSchema.safeParse(object)
  };
  function validateProperity(object){
    return movieSchema.partial().safeParse(object);
  }
module.exports = {
    validateMovie,
    validateProperity,
    movieSchema
}