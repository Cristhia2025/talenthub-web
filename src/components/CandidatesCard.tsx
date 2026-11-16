import './CandidatesCard.css';
import type { Candidates } from '../types/candidates';
import { useState } from 'react';

interface CandidatesCardProps {
  candidate: Candidates;
}


export const CandidatesCard = ({ candidate }: CandidatesCardProps) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleToggleSaved = () => {
    setIsSaved((saved) => !saved);
  };

  return (
    <article className="candidates-card">
      <p className="candidates-card-company">{candidate.company}</p>
      <h3 className="candidates-card-title">{candidate.title}</h3>
      <div className="candidates-card-footer">
        <span className="candidates-card-modality">{candidate.modality}</span>
        <span className="candidates-card-salary">
          Salario: {candidate.salary.toLocaleString('es-MX')}
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