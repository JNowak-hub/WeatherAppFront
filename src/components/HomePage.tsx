import React from "react";
import ButtonWrapper from "../styles/ButtonWrapper";
import InputFieldWrapper from "../styles/InputFieldWrapper";
import LabelStyled from "../styles/LabelStyle";
import LoginFormWrapper from "../styles/LoginFormWrapper";

const HomePage = () => {
  const [cityName, setCityName] = React.useState("");
  return (
    <div>
      <LoginFormWrapper>
        <LabelStyled>Enter City Name</LabelStyled>
        <InputFieldWrapper
          type="text"
          value={cityName}
          onChange={(event) => setCityName(event.target.value)}
        ></InputFieldWrapper>
        <ButtonWrapper>Get weather!</ButtonWrapper>
      </LoginFormWrapper>
    </div>
  );
};

export default HomePage;
