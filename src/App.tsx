import CandidatesList from './components/CandidatesList';
import Header from './components/Header';
import { candidates } from './data/candidates';

const App = () => {
  return (
    <div>

      <Header />
      <main className="container">
        <CandidatesList candidates={candidates} />
      </main>
    </div>


    
  );
};

export default App;



