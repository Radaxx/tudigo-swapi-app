import { useQuery } from '@tanstack/react-query';

import { Person } from '../models/person';

const fetchPersonById = async (id: string): Promise<Person> => {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

export const usePerson = (id: string) => {
  return useQuery<Person>({
    queryKey: ['people', id],
    queryFn: () => fetchPersonById(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
