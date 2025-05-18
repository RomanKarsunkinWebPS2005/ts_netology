import Movie from '../domain/Movie';

describe('Movie', () => {
  it('создаёт экземпляр с правильными полями', () => {
    const movie = new Movie(
      3,
      'Мстители',
      'The Avengers',
      2012,
      'США',
      'Avengers Assemble!',
      ['фантастика', 'боевик'],
      137,
      'poster_url',
      500
    );
    expect(movie.id).toBe(3);
    expect(movie.name).toBe('Мстители');
    expect(movie.originalName).toBe('The Avengers');
    expect(movie.year).toBe(2012);
    expect(movie.country).toBe('США');
    expect(movie.slogan).toBe('Avengers Assemble!');
    expect(movie.genres).toEqual(['фантастика', 'боевик']);
    expect(movie.time).toBe(137);
    expect(movie.poster).toBe('poster_url');
    expect(movie.price).toBe(500);
  });
});