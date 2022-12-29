import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddReview = () => {
  const book_nameRef = useRef()
  const nameRef = useRef()
  const commentRef = useRef()

  const handleAddReview = (e) => {
    const bookname = book_nameRef.current.value
    const name = nameRef.current.value
    const comment = commentRef.current.value

    const newReview = { bookname, name, comment }

    fetch('http://localhost:5000/Reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
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
    <div>
      <Form style={{marginTop:"12vh"}}onSubmit={handleAddReview}>
        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
          <Form.Label>Enter Book Name</Form.Label>
          <Form.Control
            ref={book_nameRef}
            type="text"
            required
            placeholder="Enter Book Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            required
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Drop Your Comment</Form.Label>
          <Form.Control
            ref={commentRef}
            type="text"
            required
            placeholder="Drop Your Comment"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default AddReview;