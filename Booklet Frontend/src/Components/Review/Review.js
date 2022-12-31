import React from 'react'
import {Card } from 'react-bootstrap'

const Review = (props) => {
  const { bookname, name, comment} = props.realReview
  return (
    <div>
      <Card  style={{ width: '400px',height:'250px', marginTop:'5vh', background:'#191919',border:'2px dotted green', borderRadius:''}}>
        <Card.Body>
        <Card.Text style={{textAlign:'center'}}><span style={{color:'#cfedf2', fontSize:'1.2rem'}}>Book Name:</span> <span style={{color:'#00e8f9',fontSize:'1.05rem'}}>{bookname}</span> </Card.Text>
          <Card.Text style={{textAlign:'center'}}><span style={{color:'#cfedf2', fontSize:'1.2rem'}}>Reviewer:</span> <span style={{color:'#00e8f9',fontSize:'1.05rem'}}>{name}</span> </Card.Text>
          <Card.Text style={{textAlign:'justify'}}><span style={{color:'#cfedf2', fontSize:'1.2rem'}}>Comment:</span> <span style={{color:'#00e8f9',fontSize:'1.05rem'}}>{comment}</span> </Card.Text>         
        </Card.Body>
      </Card>
    </div>
  );
}

export default Review;