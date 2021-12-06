import React from 'react';
import styled, { css } from 'styled-components';

interface Button {
  text: string;
  color?: string;
  filled?: boolean;
  rounded?: boolean;
  disabled?: boolean;
}

const StyledButton = styled.button<{ color?: string; filled?: boolean; rounded?: boolean; disabled?: boolean }>`
  font-size: 1.1rem;
  height: 3rem;
  ${props =>
    props.rounded &&
    css`
      border-radius: 25px;
    `}
  ${props =>
    props.filled
      ? css`
          color: #fff;
          background-color: ${props.color};
          border-color: ${props.color};
          border-style: solid;
        `
      : css`
          color: ${props.color};
          border-color: ${props.color};
          border-style: solid;
          background-color: transparent;
        `}
`;

const Button: React.FC<Button> = props => {
  const { text, color, filled, rounded, disabled } = props;
  return (
    <StyledButton color={color} filled={filled} rounded={rounded} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
