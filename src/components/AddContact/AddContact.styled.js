import styled from 'styled-components';

export const StyledAddContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const StyledAddContactInput = styled.input`
  max-width: 200px;
`;

export const StyledAddContactLabel = styled.label`
  font-size: 25px;
`;

export const StyledAddContactButton = styled.button`
  max-width: 100px;
  padding: 10px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #87ceeb, #1e90ff);
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:active {
    opacity: 0.7;
    transform: scale(0.95);
  }
`;
