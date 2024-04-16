const Logger = require('./logger');
const logger = new Logger();

class BookCSVFormatter {
    format(books) {
        let csvBooks = 'data:text/csv;charset=utf-8,';
        for (let book of books) {
            const { author, title, issueDate, description, price } = book;
            const bookLine = `${author},${title},${issueDate},${description},${price}\n`;
            csvBooks += bookLine;
        }
        logger.info('getBooksCSV', 'requested books csv', csvBooks);
        return csvBooks;
    }
}

module.exports = BookCSVFormatter;