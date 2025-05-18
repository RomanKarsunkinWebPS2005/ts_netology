import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

describe('Cart', () => {
  it('корзина изначально пуста', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
  });

  it('добавляет товары', () => {
    const cart = new Cart();
    const book = new Book(1, 'Книга', 'Автор', 100, 200);
    cart.add(book);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(book);
  });

  it('считает сумму без скидки', () => {
    const cart = new Cart();
    cart.add(new Book(1, 'Книга', 'Автор', 100, 200));
    cart.add(new MusicAlbum(2, 'Альбом', 'Исполнитель', 200));
    expect(cart.getTotal()).toBe(300);
  });

  it('считает сумму со скидкой', () => {
    const cart = new Cart();
    cart.add(new Book(1, 'Книга', 'Автор', 100, 200));
    expect(cart.getTotalWithDiscount(10)).toBe(90);
  });

  it('удаляет по id', () => {
    const cart = new Cart();
    cart.add(new Book(1, 'Книга', 'Автор', 100, 200));
    cart.add(new MusicAlbum(2, 'Альбом', 'Исполнитель', 200));
    cart.removeById(1);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].id).toBe(2);
  });

  it('удаление несуществующего id не меняет корзину', () => {
    const cart = new Cart();
    cart.add(new Book(1, 'Книга', 'Автор', 100, 200));
    cart.removeById(999);
    expect(cart.items.length).toBe(1);
  });

  it('сумма по пустой корзине равна 0', () => {
    const cart = new Cart();
    expect(cart.getTotal()).toBe(0);
  });

  it('сумма со скидкой по пустой корзине равна 0', () => {
    const cart = new Cart();
    expect(cart.getTotalWithDiscount(50)).toBe(0);
  });

  it('скидка 100% даёт итог 0', () => {
    const cart = new Cart();
    cart.add(new Book(1, 'Книга', 'Автор', 100, 200));
    expect(cart.getTotalWithDiscount(100)).toBe(0);
  });

  it('скидка 0% не меняет сумму', () => {
    const cart = new Cart();
    cart.add(new Book(1, 'Книга', 'Автор', 100, 200));
    expect(cart.getTotalWithDiscount(0)).toBe(100);
  });
});