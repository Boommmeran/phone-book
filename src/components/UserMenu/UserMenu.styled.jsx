import styled from '@emotion/styled';

export const StyledMenu = styled.div`
  text-align: center;
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const UserText = styled.p`
  font-weight: bold;
  font-size: 18px;
  font-size: 1.2em;
`;

export const LogoutBtn = styled.button`
  border: none;
  color: #007bff;
  padding: 8px 16px;
  background-color: #fff;
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s, color 0.1s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    color: #0055b3;
  }
`;
