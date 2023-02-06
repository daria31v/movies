import { getReviews } from '../../Service/apiThemovieBb';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(id).then(setReviews);
  }, [id]);

  if (reviews.length === 0) {
    return (
      <div>
        <p>We don`t have any reviews for this movie.</p>
      </div>
    );
  }

  return (
    <div>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </div>
  );
};

export default Reviews;
