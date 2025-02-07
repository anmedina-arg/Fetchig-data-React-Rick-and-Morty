import { Link } from 'react-router';
import Title from '../components/ui/title/title';

const Home = () => {
  return (
    <div>
      <Title title="Welcome to another Rick and morty app!" />
      <div>
        <Link to={'/register'}>Register</Link>
        <Link to={'/login'}>Sign In</Link>
      </div>
    </div>
  );
};

export default Home;
