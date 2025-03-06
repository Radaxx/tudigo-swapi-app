import { memo, useState } from 'react';

import { usePlanets } from '../hooks/usePlanets';

export const PlanetsListPage = memo(() => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching } = usePlanets(page);

  if (isLoading) return <div>Loading planets...</div>;
  if (isError) return <div>Error fetching planets !</div>;

  return (
    <div>
      <h2>Planets</h2>
      {isFetching && <div>Fetching more planets...</div>}
      {data?.results.map((planet) => (
        <div key={planet.name}>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
        </div>
      ))}
    </div>
  );
});

export default PlanetsListPage;
