import { isPlanet, isPlanetsApiResponse } from '../planet';

describe('Planet type guards', () => {
  it('should return true for a valid Planet object', () => {
    const data = {
      name: 'Tatooine',
      climate: 'arid',
      terrain: 'desert',
      population: '200000',
    };
    expect(isPlanet(data)).toBe(true);
  });

  it('should return false for an invalid Planet object', () => {
    const data = {
      name: 'Tatooine',
      climate: 'arid',
      population: 200000,
    };
    expect(isPlanet(data)).toBe(false);
  });

  it('should validate a valid PlanetsApiResponse', () => {
    const data = {
      count: 10,
      next: 'https://swapi.dev/api/planets/?page=2',
      previous: null,
      results: [
        {
          name: 'Tatooine',
          climate: 'arid',
          terrain: 'desert',
          population: '200000',
        },
      ],
    };
    expect(isPlanetsApiResponse(data)).toBe(true);
  });

  it('should fail for an invalid PlanetsApiResponse', () => {
    const data = {
      count: '10',
      next: null,
      previous: null,
      results: [],
    };
    expect(isPlanetsApiResponse(data)).toBe(false);
  });
});
