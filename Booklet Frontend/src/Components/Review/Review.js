import React from 'react'
import {Card } from 'react-bootstrap'
import "./Review.css"

const Review = (props) => {
  const { bookname, name, comment} = props.realReview
  return (
    <div>
      <Card className="serv" style={{ width: '350px', marginTop:'10vh', background:'rgb(212, 134, 134)'}}>
        <Card.Body>
        <Card.Text>Book Name: {bookname} </Card.Text>
          <Card.Text>Reviewer: {name} </Card.Text>
          <Card.Text>{comment} </Card.Text>         
        </Card.Body>
      </Card>
    </div>
  );
}

export default Review;