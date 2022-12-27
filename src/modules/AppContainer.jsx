import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SideBar from "./SideBar";
import AppBody from "./AppBody";

function AppContainer(props) {
  const token = useSelector((state) => state.authenticate.tokenDto);
  return (
    <React.Fragment>
      {token === null ? (
        <LoginForm />
      ) : (
        <React.Fragment>
          <SideBar />
          <AppBody />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default AppContainer;
