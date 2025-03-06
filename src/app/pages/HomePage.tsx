import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Star Wars API</h1>
      <div style={{ marginTop: '20px' }}>
        <Link to="/planets">
          <button>Planets</button>
        </Link>
        <Link to="/people">
          <button>People</button>
        </Link>
      </div>
    </div>
  );
};
