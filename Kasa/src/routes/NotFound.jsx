import '../assets/css/NotFound.css';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <>
    <div className="not-found-content">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="go-home">
        Retourner sur la page d’accueil
      </Link>
    </div>
    </>
  );
}

export default NotFound;