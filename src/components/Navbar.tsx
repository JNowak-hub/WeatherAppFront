import { FC } from "react";
import React, { useEffect } from "react";
import NavbarWrapper from "../styles/NavbarWrapper";
import NavbarItem from "../styles/NavbarItem";
import { Link } from "react-router-dom";
import NavbarButtonWrapper from "../styles/NavbarButtonWrapper";
import TimeWrapper from "../styles/TimeWrapper";
import LinkWrapper from "../styles/LinkWrapper";
const Navbar = () => {
  const [time, setTime] = React.useState("");

  const updateTime = () => {
    setTime(msToTime(new Date()));
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, [updateTime]);

  function msToTime(duration: Date) {
    let seconds = duration.getSeconds(),
      minutes = duration.getMinutes(),
      hours = duration.getHours();

    const hoursString = hours < 10 ? "0" + hours.toString() : hours.toString();
    const minutesString =
      minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    const secondsString =
      seconds < 10 ? "0" + seconds.toString() : seconds.toString();
    return hoursString + ":" + minutesString + ":" + secondsString;
  }

  return (
    <NavbarWrapper>
      <NavbarItem>
        <TimeWrapper>Time: {time}</TimeWrapper>
      </NavbarItem>
      <NavbarItem>
        <LinkWrapper href="/home">
          <NavbarButtonWrapper>Home</NavbarButtonWrapper>
        </LinkWrapper>
      </NavbarItem>
      <NavbarItem>
        <LinkWrapper href="/login">
          <NavbarButtonWrapper>Login</NavbarButtonWrapper>
        </LinkWrapper>
      </NavbarItem>
      <NavbarItem>
        <LinkWrapper href="/signin">
          <NavbarButtonWrapper>Sign In</NavbarButtonWrapper>
        </LinkWrapper>
      </NavbarItem>
    </NavbarWrapper>
  );
};

export default Navbar;
