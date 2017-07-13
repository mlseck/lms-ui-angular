import { Book } from './book.model';

export class Author{
  authorId: number;
  authorName: string;
  books: Book[];
  constructor() {
  }
}
