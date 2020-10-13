import styled from "styled-components";

const NavbarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-right: 35px;
  }
  @media only screen and (min-width: 600px) {
    padding: 5px;
  }
`;

export default NavbarItem;
