import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsPending,
  selectError,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isPending = useSelector(selectIsPending);
  const error = useSelector(selectError);

  return { user, isLoggedIn, isRefreshing, isPending, error };
};
