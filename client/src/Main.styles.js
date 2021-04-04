import styled from "styled-components";

export const Container = styled.div`
  max-width: 740px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 15px;
  overflow: hidden;
`;

export const StyledForm = styled.form`
  padding: 30px;
  display: flex;
  justify-content: space-between;

  input[name="link"] {
    flex-basis: 80%;
    padding: 10px;
    border: 1px solid #ccc;
  }

  input[type="submit"] {
    flex-basis: 15%;
    padding: 10px;
    outline: none;
    border: none;
  }
`;

export const StyledResults = styled.div`
  div:nth-child(even) {
    background: #f3f3f3;
  }

  div:nth-child(odd) {
    background: #c4e8e5;
  }
`;

export const StyledResultHeading = styled.p`
  text-align: center;
`;

export const StyledResult = styled.div`
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  padding: 5px 10px;
  background: white;

  &:hover {
    transition: 0.3s ease-in;
    background: #ccc;
  }
`;
