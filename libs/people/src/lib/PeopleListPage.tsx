import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Card, CardGrid, Pagination } from '@tudigo-swapi-app/ui';

import { usePeople } from '../hooks/usePeople';

import { Person } from '../models/person';

export const PeopleListPage = memo(() => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching } = usePeople(page);

  if (isLoading) return <div>Loading people...</div>;
  if (isError) return <div>Error fetching people !</div>;

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'People' }]} />
      <h2>Peoples</h2>
      {isFetching && <div>Fetching more people...</div>}
      <CardGrid>
        {data?.results.map((person, index) => (
          <Link to={`/people/${(page - 1) * 10 + (index + 1)}`}>
            <Card<Person>
              key={person.name}
              data={person}
              renderTitle={(p) => p.name}
              renderContent={(p) => <div />}
            />
          </Link>
        ))}
      </CardGrid>

      <Pagination
        currentPage={page}
        hasNext={!!data?.next}
        hasPrevious={!!data?.previous}
        onPrevious={() => setPage((old) => old - 1)}
        onNext={() => setPage((old) => old + 1)}
      />
    </div>
  );
});

export default PeopleListPage;
