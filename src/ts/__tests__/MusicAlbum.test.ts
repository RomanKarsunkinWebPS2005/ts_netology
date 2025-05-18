import MusicAlbum from '../domain/MusicAlbum';

describe('MusicAlbum', () => {
  it('создаёт экземпляр с правильными полями', () => {
    const album = new MusicAlbum(2, 'Альбом', 'Исполнитель', 200);
    expect(album.id).toBe(2);
    expect(album.name).toBe('Альбом');
    expect(album.author).toBe('Исполнитель');
    expect(album.price).toBe(200);
  });
});