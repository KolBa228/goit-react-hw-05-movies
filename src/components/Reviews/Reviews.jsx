import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIservices from 'services/fetch';

const Reviews = () => {
  const { movieId } = useParams();

  const [status, setStatus] = useState('pending');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviewsData = async () => {
      try {
        const reviewsData = await APIservices.fetchMovieReviews(movieId);
        setReviews(reviewsData.results);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.error(error);
      }
    };

    getReviewsData();
  }, [movieId]);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return <div>Oooops, something went wrong.</div>;
  }

  if (status === 'resolved') {
    return (
      <div>
        <h2>Reviews</h2>
        {reviews.length === 0 ? (
          <p>We don't have any reviews for this movie.</p>
        ) : (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
};

export default Reviews;
