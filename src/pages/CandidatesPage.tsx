import { useState } from 'react';
import { candidates } from '../data/candidates';
import CandidatesList from '../components/CandidatesList';
import SearchBar from '../components/SearchBar';
import './Candidates.Page.css';

const CandidatesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const normalizedTerm = searchTerm.trim().toLowerCase();

  const filteredCandidates = candidates.filter((candidate) =>
    `${candidate.title} ${candidate.company} ${candidate.modality} ${candidate.salary}`
      .toLowerCase()
      .includes(normalizedTerm),
  );

  return (
    <section>
      <div className="candidates-page-header">
        <h2 className="candidates-page-title">Candidatos</h2>
        <p className="candidates-page-count">
          {filteredCandidates.length} resultados
        </p>
      </div>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {filteredCandidates.length > 0 ? (
        <CandidatesList candidates={filteredCandidates} />
      ) : (
        <p className="candidates-page-empty">No se encontraron candidatos</p>
      )}
    </section>
  );
};

export default CandidatesPage;
