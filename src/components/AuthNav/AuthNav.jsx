import { NavWrap, StyledNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <NavWrap>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </NavWrap>
  );
}
