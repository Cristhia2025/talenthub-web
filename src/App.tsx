import Header from './components/Header';
import CandidatesPage from './pages/CandidatesPage';
import { CandidatesDetailPage } from './pages/CandidatesDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <div>

      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<CandidatesPage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
          <Route path="/candidates/:id" element={<CandidatesDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>


    
  );
};

export default App;



