import './home.css';
import Title from '../../components/ui/title/title';
import LinkButton from '../../components/ui/button/linkButton';

const Home = () => {
  return (
    <div className="homeContainer">
      <Title title="Welcome to another Rick and morty app!" />
      <div className="homeButtons">
        <LinkButton to={'/register'} label={'Register'} />
        <LinkButton to={'/login'} label={'Sign In'} />
      </div>
    </div>
  );
};

export default Home;
