import Book from '../domain/Book';

describe('Book', () => {
  it('создаёт экземпляр с правильными полями', () => {
    const book = new Book(1, 'Книга', 'Автор', 100, 200);
    expect(book.id).toBe(1);
    expect(book.name).toBe('Книга');
    expect(book.author).toBe('Автор');
    expect(book.price).toBe(100);
    expect(book.pages).toBe(200);
  });
});