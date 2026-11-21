import { useEffect, useMemo, useState } from 'react';
import CandidatesList from '../components/CandidatesList';
import SearchBar from '../components/SearchBar';
import { getCandidates } from '../services/candidatesService';
import type { Candidate } from '../types/candidates';
import './Candidates.Page.css';

const CandidatesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [candidatesData, setCandidatesData] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const result = await getCandidates();
        setCandidatesData(result);
        setErrorMessage('');
      } catch {
        setErrorMessage('No se pudieron cargar los candidatos. Intenta de nuevo más tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    void loadCandidates();
  }, []);

  const filteredCandidates = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return candidatesData;

    return candidatesData.filter((candidate) =>
      `${candidate.firstName} ${candidate.lastName} ${candidate.email} ${candidate.phone ?? ''}`
        .toLowerCase()
        .includes(term),
    );
  }, [candidatesData, searchTerm]);

  return (
    <section>
      <div className="candidates-page-header">
        <h2 className="candidates-page-title">Candidatos</h2>

        {!isLoading && !errorMessage && (
          <p className="candidates-page-count">
            {filteredCandidates.length} resultados
            {filteredCandidates.length === 1 ? ' encontrado' : ' encontrados'}
          </p>

        )}
      </div>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {isLoading ? (
        <p className="candidates-page-status" role="status">Cargando candidatos...</p>
      ) : errorMessage ? (
        <p className="candidates-page-status candidates-page-error" role="alert">
          {errorMessage}
        </p>
      ) : filteredCandidates.length === 0 ? (
        <p className="candidates-page-empty">No se encontraron candidatos</p>
      ) : (
        <CandidatesList candidates={filteredCandidates} />
      )}
    </section>
  );
};

export default CandidatesPage;
