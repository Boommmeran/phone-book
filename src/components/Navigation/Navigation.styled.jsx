import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  color: #fff;
`;

export const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 18px;

  &.active {
    ::after {
      position: absolute;
      bottom: -15px;
      right: 0;
      content: '';
      width: 100%;
      height: 4px;
      background-color: #fff;
      border-radius: 2px;
    }
  }
`;
