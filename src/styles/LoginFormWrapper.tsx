import styled from "styled-components";

const LoginFormWrapper = styled.form`
  background: rgba(31, 99, 179, 0.62);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;

  @media only screen and (max-width: 600px) {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 200px;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 601px) {
    padding-top: 30px;
    padding-bottom: 50px;
    margin-top: 100px;
    margin-left: 25%;
    margin-right: 25%;
  }
`;

export default LoginFormWrapper;
