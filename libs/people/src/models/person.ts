export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  birth_year: string;
  gender: string;
}

export interface PeopleApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

export const isPerson = (data: any): data is Person => {
  return (
    typeof data?.name === 'string' &&
    typeof data?.height === 'string' &&
    typeof data?.mass === 'string' &&
    typeof data?.hair_color === 'string' &&
    typeof data?.birth_year === 'string' &&
    typeof data?.gender === 'string'
  );
};

export const isPeopleArray = (data: any): data is Person[] => {
  return Array.isArray(data) && data.every((item: Person) => isPerson(item));
};

export const isPeopleApiResponse = (data: any): data is PeopleApiResponse => {
  return (
    typeof data?.count === 'number' &&
    (typeof data?.next === 'string' || data?.next === null) &&
    (typeof data?.previous === 'string' || data?.previous === null) &&
    isPeopleArray(data?.results)
  );
};
