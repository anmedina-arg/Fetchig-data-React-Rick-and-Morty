import { Link } from 'react-router';

// eslint-disable-next-line react/prop-types
const NavigateButton = ({ label }) => {
  return (
    <Link to={'/'}>
      <button>{label}</button>
    </Link>
  );
};

export default NavigateButton;
