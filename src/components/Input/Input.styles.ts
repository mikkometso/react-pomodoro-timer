import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
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
      padding-left: 1rem;
      height: 2rem;
      border-color: black;
      border-radius: 25px;
    }
    button {
      width: 300px;
    }
  }
`;
