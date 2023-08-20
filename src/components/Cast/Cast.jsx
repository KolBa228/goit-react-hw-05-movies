import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIservices from 'services/fetch';
const Cast = () => {
  const { movieId } = useParams();

  const [status, setStatus] = useState('pending');
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCastData = async () => {
      try {
        const creditsData = await APIservices.fetchMovieCredits(movieId);
        setCast(creditsData.cast);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.error(error);
      }
    };

    getCastData();
  }, [movieId]);

  return (
    <div>
      {status === 'pending' && <div className="message">Loading...</div>}
      {status === 'rejected' && <div className="message">Oooops, something went wrong.</div>}
      {status === 'resolved' && (
        <div>
          {cast.length === 0 ? (
            <p>We don't have any cast data for this movie.</p>
          ) : (
            <div>
              <h2>Cast</h2>
              <ul>
                {cast.map(({ id, name, profile_path, character }) => (
                  <li key={id}>
                    <div>
                      {profile_path ? (
                        <img src={`http://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
                      ) : (
                        <div>No Image Available</div>
                      )}
                    </div>
                    <div>
                      <p>{name}</p>
                      <p>Character: {character}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cast;