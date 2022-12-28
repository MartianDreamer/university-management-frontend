import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SideBar from "./SideBar";
import AppBody from "./AppBody";

function AppContainer() {
  const token = useSelector((state) => state.authenticate.tokenDto);
  const [selectedItem, setSelectedItem] = useState();

  return (
    <React.Fragment>
      {token === null ? (
        <LoginForm />
      ) : (
        <React.Fragment>
          <SideBar
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          <AppBody />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default AppContainer;
