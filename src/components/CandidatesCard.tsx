import './CandidatesCard.css';
import type { Candidate } from '../types/candidates';
import { useState } from 'react';

interface CandidatesCardProps {
  candidate: Candidate;
}


export const CandidatesCard = ({ candidate }: CandidatesCardProps) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleToggleSaved = () => {
    setIsSaved((saved) => !saved);
  };

  return (
    <article className="candidates-card">
      <p className="candidates-card-company">{candidate.email}</p>
      <h3 className="candidates-card-title">{candidate.firstName} {candidate.lastName}</h3>
      <div className="candidates-card-footer">
        <span className="candidates-card-modality">{candidate.phone ?? 'Sin teléfono'}</span>
        <span className="candidates-card-salary">
          {candidate.companyId ? `Empresa: ${candidate.companyId}` : 'Sin empresa asociada'}
        </span>
      </div>
      <button
        type="button"
        className={isSaved ? 'save-button-active' : 'save-button'}
        aria-pressed={isSaved}
        onClick={handleToggleSaved}
      >
        {isSaved ? 'Guardado' : 'Guardar'}
      </button>
    </article>
  );
};
