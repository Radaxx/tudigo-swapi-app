export interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

export interface PlanetsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

export const isPlanet = (data: any): data is Planet => {
  return (
    typeof data?.name === 'string' &&
    typeof data?.climate === 'string' &&
    typeof data?.terrain === 'string' &&
    typeof data?.population === 'string'
  );
};

export const isPlanetArray = (data: any): data is Planet[] => {
  return Array.isArray(data) && data.every((item: Planet) => isPlanet(item));
};

export const isPlanetsApiResponse = (data: any): data is PlanetsApiResponse => {
  return (
    typeof data?.count === 'number' &&
    (typeof data?.next === 'string' || data?.next === null) &&
    (typeof data?.previous === 'string' || data?.previous === null) &&
    isPlanetArray(data?.results)
  );
};
