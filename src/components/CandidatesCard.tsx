import './CandidatesCard.css';
import type { Candidates } from '../types/candidates';

interface CandidatesCardProps {
  candidate: Candidates;
}


export const CandidatesCard = ({ candidate }: CandidatesCardProps) => {
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
    </article>
  );
};

