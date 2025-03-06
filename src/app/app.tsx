import { Routes, Route } from 'react-router-dom';

import { PlanetsListPage } from '@tudigo-swapi-app/planets';
import { PeopleListPage } from '@tudigo-swapi-app/people';

import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planets" element={<PlanetsListPage />} />
        <Route path="/people" element={<PeopleListPage />} />
      </Routes>
    </div>
  );
};

export default App;
