import { useAuth } from 'hooks';
import { Nav, Link } from './Navigation.styled';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
}
