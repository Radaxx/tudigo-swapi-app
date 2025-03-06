import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ marginTop: '20px' }}>
        <Link to="/planets">
          <button className="star-wars-button" style={{ marginRight: '50px' }}>
            Planets
          </button>
        </Link>
        <Link to="/people">
          <button className="star-wars-button">People</button>
        </Link>
      </div>
    </div>
  );
};
