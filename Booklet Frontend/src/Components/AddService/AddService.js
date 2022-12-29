import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddService = () => {
  const nameRef = useRef()
  const priceRef = useRef()
  const authorRef = useRef()
  const imgRef = useRef()

  const handleAddService = (e) => {
    const name = nameRef.current.value
    const price = priceRef.current.value
    const author = authorRef.current.value
    const img = imgRef.current.value

    const newService = { name, price, author, img }

    fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newService),
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
      <Form style={{marginTop:"12vh"}}onSubmit={handleAddService}>
        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
          <Form.Label>Enter Book Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Book Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Book Price</Form.Label>
          <Form.Control
            ref={priceRef}
            type="text"
            placeholder="Enter Book Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Author Name</Form.Label>
          <Form.Control
            ref={authorRef}
            type="text"
            placeholder="Enter author name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Service Image Link</Form.Label>
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Enter Book Image Link"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default AddService;