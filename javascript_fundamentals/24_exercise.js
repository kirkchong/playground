class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }

    // TODO: define methods `addFavoriteBook(..)`
    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }
    // and `printFavoriteBooks()`
    printFavoriteBooks() {
        console.log(`Favorite Books: ${this.favoriteBooks.length}`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
}

function loadBooks(bookshelf) {
    books = fakeAjax(BOOK_API, function cb(list) {
        for (let book of list) {
            bookshelf.addFavoriteBook(book);
            bookshelf.printFavoriteBooks();
        }
    })
}

var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
    setTimeout(function fakeLoadingDelay() {
        cb([
            "A Song of Ice and Fire",
            "The Great Gatsby",
            "Crime & Punishment",
            "Great Expectations",
            "You Don't Know JS"
        ]);
    }, 500);
}


let bs = new Bookshelf()
loadBooks(bs);


bs.printFavoriteBooks();

