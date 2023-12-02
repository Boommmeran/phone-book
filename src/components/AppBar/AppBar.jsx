import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';
import { AppBarWrap } from './AppBar.styled';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarWrap>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarWrap>
  );
}
