import React, { useEffect, useState } from 'react'
import Review from '../Review/Review'
import "./Reviews.css"
const Reviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/Reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [reviews])


  return (
    <section className='main'>
      <div className='title'>
        <h2>Reviews</h2>
      </div>
      <div className="Reviews">
        {reviews.map((review) => (
          <Review realReview={review}></Review>
          ))}
      </div>
    </section>
  );
}

export default Reviews;