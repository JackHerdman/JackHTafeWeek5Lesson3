// const genre = Object.freeze({
//     Fantasy: "Fantasy",
//     Comedy: "Comedy"
// });

// List of all people who can borrow books
let borrowers = [
    {
        id: 1,
        name: "Luke Parker"
    }, {
        id: 2,
        name: "Jacinta Bealle"
    }, {
        id: 3,
        name: "Dan Wills"
    }
];

// List of books that are avaliable to be borrowed
let books = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        genre: 1
    }, {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        genre: 1
    }, {
        id: 3,
        title: "The Hitchhiker's Guid to the Galaxy",
        genre: 2
    }
];

let genres = [{
    id: 1,
    name: "Fantasy"
}, {
    id: 2,
    name: "Comedy"
}];

// List of all books currently being borrowed
let bookBorrowers = [
    {
        borrowerId: 1,
        bookId: 1
    }, {
        borrowerId: 1,
        bookId: 2
    }, {
        borrowerId: 2,
        bookId: 1
    }, {
        borrowerId: 3,
        bookId: 2
    }, {
        borrowerId: 1,
        bookId: 2
    }, {
        borrowerId: 2,
        bookId: 2
    }];

function getBookById(bookId) {
    return books.find(book => book.id == bookId);
}
function getBorrowerById(id) {
    return bookBorrowers.find(bb => bb.id == id);
}
function getGenreById(id) {
    return genres.find(genre => genre.id == id);
}
function getBooksByPerson(borrowerId) {
    let booksBorrowedByPerson = bookborrowers.filter(bb => bb.borrowerId == borrowerId);
    let bookIds = booksBorrowedByPerson.map(bb => bb.bookId);
    return bookIds.map(id => getBookById(id));
}

function getPeoplebyBook(bookId) {
    let peopleWhoHaveBorrowed = bookBorrowers.filter(bb => bb.bookId == bookId);
    let borrowerIds = peopleWhoHaveBorrowed.map(bb => bb.borrowerId);
    return borrowerIds.map(id => getBorrowerById(id));
}

function getGenresBorrowedByPerson(borrowerId) {
    let booksBorrowed = getBooksByPerson(borrowerId);
    let genreIds = booksBorrowed.map(book => book.genreId);
    let genres = genreIds.map(id => getGenreById(id));
    return genres.map(genre => genre.name)
}

let numbers = [1,2,3,1,5,2,4];
let uniqueNumbers = [];
for (let number of numbers){
    if (uniqueNumbers.includes(number)){
        continue;
    }
    uniqueNumbers.push(number)
    }