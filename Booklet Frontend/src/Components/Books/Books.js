import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'
import './Books.css'

const Books = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }, [books])

  const handleDeleteBook = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?')
    if (proceed) {
      fetch(`http://localhost:5000/books/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('deleted successfully')
            const remainingBooks = books.filter(
              (book) => book._id !== id,
            )
            setBooks(remainingBooks)
          }
        })
    }
  }

  return (
    <section className='main'>
      <div className='title'>
        <h2>Books</h2>
      </div>
      <div className="books">
        {books.map((book) => (
        <Book realBook={book} handleDeleteBook={handleDeleteBook} ></Book>
        ))}
      </div>
    </section>
    
  );
}

export default Books;