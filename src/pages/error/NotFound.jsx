import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
        <div className='error_container'>
            <h1>404</h1>
            <div>
              <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
  )
}
