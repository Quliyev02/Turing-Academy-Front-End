class Library {
    constructor() {
      this.books = ["Crime and Punishment, Lord of The Rings, The Brothers Karamazov, The Idiot"]; // Array to hold book objects
    }
  
    // Method to add a new book to the library
    addBook(book) {
      this.books.push(book);
    }
  
    // Method to check if a book is available by title
    checkAvailability(title) {
      const book = this.books.find(b => b.title === title);
      return book ? book.isAvailable : false;
    }
  
    // Method to borrow a book (set isAvailable to false)
    borrowBook(title) {
      const book = this.books.find(b => b.title === title);
      if (book && book.isAvailable) {
        book.isAvailable = false;
        return `${title} has been borrowed.`;
      } else {
        return `${title} is not available.`;
      }
    }
  
    // Method to return a book (set isAvailable to true)
    returnBook(title) {
      const book = this.books.find(b => b.title === title);
      if (book) {
        book.isAvailable = true;
        return `${title} has been returned.`;
      } else {
        return `${title} not found in the library.`;
      }
    }
  
    // Method to list all available books
    listAvailableBooks() {
      return this.books.filter(book => book.isAvailable);
    }
  }
  
  // Example book object structure
  const book1 = { title: 'Book One', author: 'Author One', isAvailable: true };
  const book2 = { title: 'Book Two', author: 'Author Two', isAvailable: true };
  
  // Example usage
  const myLibrary = new Library();
  myLibrary.addBook(book1);
  myLibrary.addBook(book2);
  
  console.log(myLibrary.listAvailableBooks()); // Lists available books
  console.log(myLibrary.borrowBook('Book One')); // Borrows 'Book One'
  console.log(myLibrary.checkAvailability('Book One')); // Checks availability of 'Book One'
  console.log(myLibrary.returnBook('Book One')); // Returns 'Book One'
  





