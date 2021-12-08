import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  margin-bottom: 2rem;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      font-size: 2rem;
    }
    input {
      height: 2rem;
      margin: 1rem;
      padding-left: 1rem;
      align-self: stretch;
      border-color: black;
      border-radius: 25px;
    }
    button {
      width: 300px;
    }
  }
`;
