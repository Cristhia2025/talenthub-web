import { Link } from 'react-router';
import './NotFoundPage.css';

export const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <h2 className="not-found-title">Pagina no Encontrada</h2>
      <p className="not-found-text">La direccion no existe.</p>
      <Link to="/candidates" className="not-found-link">
        Ir a los Candidatos
      </Link>
    </section>
  )
}


