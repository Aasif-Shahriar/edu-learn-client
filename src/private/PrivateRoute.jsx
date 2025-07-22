import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "../components/loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loading />;

  return user ? (
    children
  ) : (
    <Navigate to="/signIn" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
