import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeText = styled.p`
  text-align: center;
  font-size: 2em;
  color: #007bff;
  margin-bottom: 10px;
`;

export const HomeLink = styled(Link)`
  color: #0055b3;
  text-decoration: none;
  font-weight: bold;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;
