import { memo, useState } from 'react';

import { Breadcrumb, Card, CardGrid, Pagination } from '@tudigo-swapi-app/ui';

import { usePlanets } from '../hooks/usePlanets';

import { Planet } from '../models/planet';

export const PlanetsListPage = memo(() => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching } = usePlanets(page);

  if (isLoading) return <div>Loading planets...</div>;
  if (isError) return <div>Error fetching planets !</div>;

  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Home', path: '/' }, { label: 'Planets' }]}
      />
      <h2>Planets</h2>
      {isFetching && <div>Fetching more planets...</div>}
      <CardGrid>
        {data?.results.map((planet) => (
          <Card<Planet>
            key={planet.name}
            data={planet}
            renderTitle={(p) => p.name}
            renderContent={(p) => (
              <>
                <p>Climate: {p.climate}</p>
                <p>Terrain: {p.terrain}</p>
                <p>Population: {p.population}</p>
              </>
            )}
          />
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

export default PlanetsListPage;
