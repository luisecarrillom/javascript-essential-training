// This file defines the Book class
class Book {
    constructor(title, author, pages, genre, yearPublished) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.genre = genre;
      this.yearPublished = yearPublished;
    }
  
    // Method to calculate book age
    bookAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.yearPublished;
    }
  }
  
  export default Book;
  