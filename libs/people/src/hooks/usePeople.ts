import { useQuery } from '@tanstack/react-query';

import { isPeopleApiResponse, PeopleApiResponse } from '../models/person';

const fetchPeople = async (page: number): Promise<PeopleApiResponse> => {
  const url = `https://swapi.dev/api/people/?page=${page}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  if (!isPeopleApiResponse(data)) {
    throw new Error('Response does not match PeopleApiResponse');
  }

  return data;
};

export const usePeople = (page: number) => {
  return useQuery<PeopleApiResponse, Error>({
    queryKey: ['people', page],
    queryFn: () => fetchPeople(page),
    placeholderData: (previousData) => previousData,
    staleTime: 1000 * 60, // 1 minute
  });
};
