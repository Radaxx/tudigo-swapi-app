import { useQuery } from '@tanstack/react-query';

import { isPlanetsApiResponse, PlanetsApiResponse } from '../models/planet';

const fetchPlanets = async (page: number): Promise<PlanetsApiResponse> => {
  const url = `https://swapi.dev/api/planets/?page=${page}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  if (!isPlanetsApiResponse(data)) {
    throw new Error('Response does not match PlanetsApiResponse');
  }

  return data;
};

export const usePlanets = (page: number) => {
  return useQuery<PlanetsApiResponse>({
    queryKey: ['planets', page],
    queryFn: () => fetchPlanets(page),
    placeholderData: (previousData) => previousData,
    staleTime: 1000 * 60, // 1 minute
  });
};
