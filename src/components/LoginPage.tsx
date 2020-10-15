import React from "react";
import LoginFormWrapper from "../styles/LoginFormWrapper";
import InputFieldWrapper from "../styles/InputFieldWrapper";
import ButtonWrapper from "../styles/ButtonWrapper";
import { useHistory } from "react-router-dom";
import LabelStyled from "../styles/LabelStyle";

const LoginPage = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const logIn = async () => {
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Location: "",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });
    history.push("/Home");
  };

  return (
    <LoginFormWrapper>
      <LabelStyled>UserName</LabelStyled>
      <InputFieldWrapper
        type="name"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      ></InputFieldWrapper>
      <LabelStyled>Password</LabelStyled>
      <InputFieldWrapper
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      ></InputFieldWrapper>
      <ButtonWrapper onClick={logIn}>LogIn</ButtonWrapper>
    </LoginFormWrapper>
  );
};

export default LoginPage;
