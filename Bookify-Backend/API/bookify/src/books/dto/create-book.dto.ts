export class CreateBookDto {
  title: string;
  cover: string;
  author: string;
  genre: Genre;
}
export enum Genre {
  Journalism = 'Journalism',
  Classics = 'Classics',
  Comic = 'Comic',
  Fantasy = 'Fantasy',
  Fiction = 'Fiction',
  Stories = 'Stories',
  Politics = 'Politics',
  Science = 'Science',
}
