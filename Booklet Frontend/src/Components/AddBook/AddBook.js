import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import "./AddBook.css"

const AddBook = () => {
  const nameRef = useRef()
  const priceRef = useRef()
  const authorRef = useRef()
  const imgRef = useRef()

  const handleAddBook = (e) => {
    const name = nameRef.current.value
    const price = priceRef.current.value
    const author = authorRef.current.value
    const img = imgRef.current.value

    const newBook = { name, price, author, img }

    fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Data is Successfully added in database')
        }
      })

    e.preventDefault()
  }

  return (
    <section className='Books'>
      <Form style={{marginTop:"12vh"}}onSubmit={handleAddBook}>
        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px'}}>Enter Book Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            required
            placeholder="Enter Book Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px'}}>Enter Book Price</Form.Label>
          <Form.Control
            ref={priceRef}
            type="text"
            required
            placeholder="Enter Book Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px'}}>Enter Author Name</Form.Label>
          <Form.Control
            ref={authorRef}
            type="text"
            required
            placeholder="Enter author name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color:'bisque', fontSize:'20px'}}>Enter Book Image Link</Form.Label>
          <Form.Control
            ref={imgRef}
            type="text"
            required
            placeholder="Enter Book Image Link"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  )
}
export default AddBook;