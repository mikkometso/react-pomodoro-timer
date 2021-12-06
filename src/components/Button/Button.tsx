import React from 'react';
import styled from 'styled-components';

interface Button {
  text: string;
  color?: string;
  filled?: boolean;
  disabled?: boolean;
}

const StyledButton = styled.button<{ color?: string; filled?: boolean; disabled?: boolean }>`
  height: 3rem;
  border-radius: 25px;
  background-color: transparent;
  font-size: 1.1rem;
  background-color: ${props => (props.color ? `${props.color};` : 'red')};
`;

const Button: React.FC<Button> = props => {
  const { text, color, filled, disabled } = props;
  return (
    <StyledButton color={color} filled={filled} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
