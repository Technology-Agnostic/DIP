const Logger = require('./logger');

class BookJSONFormatter {
    constructor() {
        this.logger = new Logger();
    }

    format(books) {
        const jsonBooks = {};
        for (let book of books) {
            Object.assign(jsonBooks, {
                [book.id]: book
            });
        }
        this.logger.info('getBooksJSON', 'requested books json', jsonBooks);
        return JSON.stringify(jsonBooks);
    }
}

module.exports = BookJSONFormatter;