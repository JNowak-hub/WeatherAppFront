import React from "react";
import FormWrapper from "../styles/LoginFormWrapper";
import InputWrapper from "../styles/InputFieldWrapper";
import ButtonWrapper from "../styles/ButtonWrapper";
import LabelStyled from "../styles/LabelStyle";
import LinkWrapper from "../styles/LinkWrapper";

const SinginPage = () => {
  const provider = "local";
  const [userName, setUserName] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = async () => {
    const response = await fetch("http://localhost:8080/api/login/signIn", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        email: email,
        name: name,
        provider: provider,
      }),
    });
    const data = await response.json();
  };

  return (
    <FormWrapper>
      <LabelStyled>Insert User Name</LabelStyled>
      <InputWrapper
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <LabelStyled>Name</LabelStyled>
      <InputWrapper
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <LabelStyled>Email adress</LabelStyled>
      <InputWrapper
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <LabelStyled>Password</LabelStyled>
      <InputWrapper
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <ButtonWrapper onClick={signIn}>Registrate</ButtonWrapper>
      <div>
        <LinkWrapper href="/login">Log in</LinkWrapper>
      </div>
    </FormWrapper>
  );
};

export default SinginPage;
