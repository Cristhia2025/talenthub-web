import { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { Link, useParams } from 'react-router';
import { getCandidateById } from '../services/candidatesService';
import type { Candidate } from '../types/candidates';
import './CandidatesDetailPage.css';

export const CandidatesDetailPage = () => {
  const { id = '' } = useParams<{ id: string }>();
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isActive = true;

    const loadCandidate = async () => {
      const candidateId = Number(id);
      if (!Number.isSafeInteger(candidateId) || candidateId < 1) {
        setErrorMessage('El identificador del candidato no es válido.');
        setIsLoading(false);
        return;
      }

      try {
        const result = await getCandidateById(candidateId);
        if (isActive) setCandidate(result);
      } catch (error) {
        if (!isActive) return;
        const status = isAxiosError(error) ? error.response?.status : undefined;
        setErrorMessage(
          status === 404 || status === 400
            ? 'El candidato que buscas no existe.'
            : 'No se pudo cargar el candidato. Intenta de nuevo más tarde.',
        );
      } finally {
        if (isActive) setIsLoading(false);
      }
    };

    void loadCandidate();
    return () => {
      isActive = false;
    };
  }, [id]);

  return (
    <section>
      <Link to="/candidates" className="candidates-detail-back">← Volver a candidatos</Link>

      {isLoading ? (
        <p className="candidates-detail-status" role="status">Cargando candidato...</p>
      ) : errorMessage ? (
        <p className="candidates-detail-status candidates-detail-error" role="alert">
          {errorMessage}
        </p>
      ) : candidate ? (
        <article className="candidates-detail">
          <p className="candidates-detail-company">{candidate.email}</p>
          <h2 className="candidates-detail-title">{candidate.firstName} {candidate.lastName}</h2>
          <dl className="candidates-detail-list">
            <dt>Teléfono</dt><dd>{candidate.phone || 'No registrado'}</dd>
            <dt>Empresa</dt><dd>{candidate.companyId || 'Sin empresa asociada'}</dd>
          </dl>
        </article>
      ) : null}
    </section>
  );
};
