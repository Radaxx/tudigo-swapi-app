import { useParams } from 'react-router-dom';

import { usePerson } from '../hooks/usePerson';

export const PersonDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = usePerson(id!);

  if (isLoading) return <div>Loading person details...</div>;
  if (isError) return <div>Error fetching person details !</div>;

  if (!data) return null;

  return (
    <div>
      <h2>Person Detail</h2>

      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Hair Color: {data.hair_color}</p>
      <p>Birth Year: {data.birth_year}</p>
      <p>Gender: {data.gender}</p>
    </div>
  );
};
