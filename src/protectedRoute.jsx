import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from './context/authContext';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  //console.log(user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
