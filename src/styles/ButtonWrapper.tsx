import styled from "styled-components";

const ButtonWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    border: 1px solid #000000;
    box-sizing: border-box;
    width: 200px;
    margin-top: 40px;
    height: 30px;
    border-radius: 20px;
  }
  background: rgba(19, 50, 162, 0.85);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: rgba(19, 50, 162, 0.14);
    cursor: pointer;
  }
  @media only screen and (min-width: 601px) {
    border: 1px solid #f6fb1b;
    box-sizing: border-box;
    width: 200px;
    margin-top: 40px;
    height: 35px;
    border-radius: 20px;
  }
  background: rgba(19, 50, 162, 0.85);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: rgba(19, 50, 162, 0.14);
    cursor: pointer;
  }
  color: #f6fb1b;
`;

export default ButtonWrapper;
