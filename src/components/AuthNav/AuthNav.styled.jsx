import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #007bff;
  padding: 8px 16px;
  background-color: #fff;
  border-radius: 5px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    color: #0055b3;
  }

  &.active {
    transform: scale(1.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    color: #0055b3;
  }
`;
