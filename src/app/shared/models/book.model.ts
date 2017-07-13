import { Publisher } from './publisher.model';
import { Author } from './author.model';
import { Genre } from './genre.model';

export class Book {
    public bookId: number;
    public title: string;
    public publisher: Publisher;
    public authors: Author[];
    public genres: Genre[];
    constructor() {
    }
}
