const Logger = require('./logger');
const Cache = require('./cache');
const BookFactory = require('./book-factory');

class BookRepository {
    constructor() {
        this.logger = new Logger();
        this.cache = new Cache();
        this.bookFactory = new BookFactory();

        this.booksStorageUrl = 'example://api.books-storage/books';
    }

    async getBooks() {
        if (this.cache.isValid()) return this.cache.getData();

        const booksData = await fetch(this.booksStorageUrl)
            .then((booksData) => {
                this.logger.info('getBooks', 'requested books', booksData);
                return booksData;
            });
        const books = booksData.map(this.bookFactory.createBook);
        this.cache.setData(books);
        return books;
    }
}

module.exports = BookRepository;