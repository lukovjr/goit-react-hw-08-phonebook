import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggeIn, selectIsRefreshing } from 'redux/auth/selectors';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggeIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};