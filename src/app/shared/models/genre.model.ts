import { Book } from './book.model';

export class Genre{
  genreId: number;
  genreName: string;
  books: Book[];
  constructor() {
  }
}
