import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Service = (props) => {
  const { _id, name, img, author, price } = props.realService
  const { handleDeleteBook } = props
  return (
    <div>
      <Card classname="serv" style={{ width: '18rem', marginTop:'10vh'}}>
        <Card.Img variant="top" style={{height: '250px'}} src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Author:  {author} </Card.Text>
          <Card.Text>{price} Taka Only</Card.Text>
          

          <Button
            onClick={() => handleDeleteBook(_id)}
            variant="primary"
            className="ms-4"
          >
            Delete
          </Button>
          <Link to={`/updateService/${_id}`}>
            <Button variant="primary" className="ms-4">
              Update
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Service