import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

    getBooks(): Book[] {
        return [
            { id: 1, title: 'Book One', author: 'Author A', memo: 'Memo for Book One' },
            { id: 2, title: 'Book Two', author: 'Author B', memo: 'Memo for Book Two' },
        ];
    }
}
