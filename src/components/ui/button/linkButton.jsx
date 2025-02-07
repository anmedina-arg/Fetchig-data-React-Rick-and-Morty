import './linkButton.css';
import { Link } from 'react-router';

// eslint-disable-next-line react/prop-types
const LinkButton = ({ label }) => {
  return (
    <Link className="linkButton" to={'/'}>
      {label}
    </Link>
  );
};

export default LinkButton;

/*
Este componente es un link que simula un boton, no usamos expresamente el tag button
*/
