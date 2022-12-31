import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Book.css"

const Book = (props) => {
  const { _id, name, img, author, price } = props.realBook
  const { handleDeleteBook } = props
  return (
    <div className='cls'>
      <Card style={{ width: '350px',height: '700px', marginTop:'5vh', background:'#191919', border:'4px dashed aqua', borderRadius:'10px'}}>
        <Card.Img variant="top" style={{height: 'auto', width:'99.8%',alignContent:'center', border:'2px solid bisque', borderRadius:'10px'}} src={img} />
        <Card.Body>
          <div className='title'><Card.Title>{name}</Card.Title></div>
          <div>
            <Card.Text className='au_pr'><span>Author:</span>  <span style={{color:'bisque'}}>{author}</span> </Card.Text>
            <Card.Text><span style={{color:'bisque'}}>Tk</span> <span>{price}</span> <span style={{color:'bisque'}}>Only</span></Card.Text>
          </div>
          <div className='func'><Button
            onClick={() => handleDeleteBook(_id)}
            variant="danger"
            className="ms-4"
          >
            Delete
          </Button>
          <Link to={`/updateBook/${_id}`}>
            <Button variant="primary" className="ms-4">
              Update
            </Button>
          </Link></div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Book