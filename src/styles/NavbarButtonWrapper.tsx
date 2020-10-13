import styled from "styled-components";

const NavbarButtonWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    background: rgba(19, 50, 162, 0.85);
    border: 1px solid #000000;
    box-sizing: border-box;
    padding: 5px;
    width: 150%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  :hover {
    background: rgba(19, 50, 162, 0.14);
    cursor: pointer;
  }
  @media only screen and (min-width: 601px) {
    background: rgba(19, 50, 162, 0.85);
    border: 1px solid #000000;
    box-sizing: border-box;
    width: 150%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :hover {
    background: rgba(19, 50, 162, 0.14);
    cursor: pointer;
  }
`;

export default NavbarButtonWrapper;
