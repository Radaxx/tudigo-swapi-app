import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import { usePeople } from '../hooks/usePeople';

export const PeopleListPage = memo(() => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching } = usePeople(page);

  if (isLoading) return <div>Loading people...</div>;
  if (isError) return <div>Error fetching people !</div>;

  return (
    <div>
      <h2>Planets</h2>
      {isFetching && <div>Fetching more people...</div>}
      {data?.results.map((person, index) => (
        <li key={person.name}>
          <Link to={`/people/${index + 1}`}>{person.name}</Link>
        </li>
      ))}
    </div>
  );
});

export default PeopleListPage;
