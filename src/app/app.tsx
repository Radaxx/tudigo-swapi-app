import { Routes, Route } from 'react-router-dom';

import { PlanetsListPage } from '@tudigo-swapi-app/planets';

import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planets" element={<PlanetsListPage />} />
      </Routes>
    </div>
  );
};

export default App;
