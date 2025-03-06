import { useParams } from 'react-router-dom';

import { Card } from '@tudigo-swapi-app/ui';

import { usePerson } from '../hooks/usePerson';
import { Person } from '../models/person';

export const PersonDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = usePerson(id!);

  if (isLoading) return <div>Loading person details...</div>;
  if (isError) return <div>Error fetching person details !</div>;

  if (!data) return null;

  return (
    <div>
      <h2>Person Detail</h2>
      <Card<Person>
        data={data}
        renderTitle={(p) => p.name}
        renderContent={(p) => (
          <>
            <p>Height: {p.height}</p>
            <p>Mass: {p.mass}</p>
            <p>Hair Color: {p.hair_color}</p>
            <p>Birth Year: {p.birth_year}</p>
            <p>Gender: {p.gender}</p>
          </>
        )}
      />
    </div>
  );
};
