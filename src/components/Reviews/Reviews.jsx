// import { getReviews } from '../../Service/apiThemovieBb';
// import { useState, useEffect } from 'react';

export const Reviews = () => {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   async function fetchReviews() {
  //     try {
  //       const reviewsFetch = await getReviews();
  //       console.log(reviewsFetch);
  //       setReviews(reviewsFetch.results);
  //     } catch {
  //       console.log('error');
  //     }
  //   }
  //   fetchReviews();
  // }, []);

  return (
    <section>
      <div>
        <h1>Rewievs</h1>
        {/* <ul key={reviews.id}>
          <li>
            <h3>{reviews.author}</h3>
            <p>{reviews.content}</p>
          </li>
        </ul> */}
      </div>
    </section>
  );
};
