import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      font-size: 2rem;
    }
    input {
      width: 450px;
      margin: 1rem 0;
    }
    button {
      width: 300px;
    }
  }
`;
