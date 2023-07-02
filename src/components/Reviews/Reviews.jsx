import { getReviews } from '../../services/apiThemovieBb';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextReviews } from './Reviews.styled';
import PropTypes from 'prop-types';

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
        <TextReviews key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </TextReviews>
      ))}
    </div>
  );
};

export default Reviews;

Reviews.protoType = {
  id: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  getReviews: PropTypes.func.isRequired,
}.isRequired;
