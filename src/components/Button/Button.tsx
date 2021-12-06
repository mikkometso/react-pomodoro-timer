import React from 'react';
import styled from 'styled-components';

interface Button {
  text: string;
  filled?: boolean;
  disabled?: boolean;
}

const StyledButton = styled.button<{ filled?: boolean; disabled?: boolean }>`
  border-radius: 25px;
  background-color: transparent;
`;

const Button: React.FC<Button> = props => {
  const { text, filled, disabled } = props;
  return (
    <StyledButton filled={filled} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
