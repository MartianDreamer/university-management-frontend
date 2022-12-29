import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SideBar from "./SideBar";
import AppBody from "./AppBody";

function AppContainer() {
  const token = useSelector((state) => state.authenticate.tokenDto);
  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <React.Fragment>
      {token === null ? (
        <LoginForm />
      ) : (
        <div className="flex">
          <SideBar
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          <AppBody selectedItem={selectedItem} />
        </div>
      )}
    </React.Fragment>
  );
}
export default AppContainer;
