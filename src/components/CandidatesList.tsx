import './CandidatesList.css';
import type { Candidate } from '../types/candidates';
import { CandidatesCard } from './CandidatesCard';

interface CandidatesListProps {
  candidates: Candidate[];
}

const CandidatesList = ({ candidates }: CandidatesListProps) => {
  return (
    <div className='candidates-list'>
      {candidates.map((candidate) => (
        <CandidatesCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
};

export default CandidatesList;
