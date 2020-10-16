import React from "react";
import FormWrapper from "../styles/LoginFormWrapper";
import InputWrapper from "../styles/InputFieldWrapper";
import ButtonWrapper from "../styles/ButtonWrapper";
import LabelStyled from "../styles/LabelStyle";
import LinkWrapper from "../styles/LinkWrapper";
import { useHistory } from "react-router-dom";

const SinginPage = () => {
  let history = useHistory();
  const provider = "local";
  const [userName, setUserName] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const conflictStatus = (text: string) => {
    setEmail("");
    setName("");
    setPassword("");
    setUserName("");
    alert(text);
  };

  const signIn = async () => {
    const response = await fetch(
      "https://weather-web-app-backend.azurewebsites.net/api/auth/signIn",
      {
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
      }
    ).then(async (response) => {
      if (response.ok) {
        history.push("/login");
        alert("signed as: " + userName + " login to continue");
      }
      if (response.status === 409) {
        conflictStatus("cannot create user");
      }
    });
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
