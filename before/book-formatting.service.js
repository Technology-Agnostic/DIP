const BookRepository = require('./book-repository');
const BookJSONFormatter = require('./book-json-formatter');
const BookCSVFormatter = require('./book-csv-formatter');

const bookJSONFormatter = new BookJSONFormatter();
const bookCSVFormatter = new BookCSVFormatter();

class BookFormattingService {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    async getJSONFormattedBooks() {
        const books = await this.bookRepository.getBooks();
        return bookJSONFormatter.format(books);
    }

    async getCSVFormattedBooks() {
        const books = await this.bookRepository.getBooks();
        return bookCSVFormatter.format(books);
    }
}

module.exports = BookFormattingService;
