import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useParams} from 'react-router-dom'

const UpdateBook = () => {
  const { bookId } = useParams()
  const [book, setBook] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/books/${bookId}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
  }, [bookId])

  const handleNameChange = (e) => {
    const updatedName = e.target.value
    const updatedBook = {
      name: updatedName,
      price: book.price,
      img: book.img,
      author: book.author,
    }
    setBook(updatedBook)
  }
  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value
    const updatedBook = {
      name: book.name,
      price: updatedPrice,
      img: book.img,
      author: book.author,
    }
    setBook(updatedBook)
  }
  const handleauthorChange = (e) => {
    const updatedauthor = e.target.value
    const updatedBook = {
      name: book.name,
      price: book.price,
      img: book.img,
      author: updatedauthor,
    }
    setBook(updatedBook)
  }
  const handleImageChange = (e) => {
    const updatedImg = e.target.value
    const updatedBook = {
      name: book.name,
      price: book.price,
      img: updatedImg,
      author: book.author,
    }
    setBook(updatedBook)
  }

  const handleUpdateBook = (e) => {
    fetch(`http://localhost:5000/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Update Successful')
          setBook({})
        }
      })

    e.preventDefault()
  }

  return (
    <div>
      <Form style={{marginTop: "15vh"}} onSubmit={handleUpdateBook}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px'}}>Book Name</Form.Label>
          <Form.Control
            type="text"
            value={book.name || ''}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px'}}>Book Price</Form.Label>
          <Form.Control
            type="text"
            value={book.price || ''}
            onChange={handlePriceChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px'}}>Author Name</Form.Label>
          <Form.Control
            type="text"
            value={book.author || ''}
            onChange={handleauthorChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px'}}>Book Image</Form.Label>
          <Form.Control
            type="text"
            value={book.img || ''}
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  )
}

export default UpdateBook