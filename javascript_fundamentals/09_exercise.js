
function addFavoriteBook(title) {
    if (title.includes("Great")) {
        return;
    }

    favBooks.push(title);
}

function printFavBook(list) {
    console.log(`No of books: ${list.length}`);
    for (let book of list) { // prints title
        console.log(book);
    }

    for (let book in list) { // prints 0 1 2 
        console.log(book)
    }
}

var favBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gasby");
addFavoriteBook("Crime and Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavBook(favBooks)