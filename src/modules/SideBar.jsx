import { useDispatch } from "react-redux";
import SideBarItem from "./SideBarItem";
import { logoutAction } from "../actions/authentication";

function SideBar() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutAction());
  };
  return (
    <div
      style={{
        height: window.innerHeight,
        width: 200,
        backgroundColor: "coral",
      }}
    >
      <SideBarItem handleOnclick={handleLogOut}>Log out</SideBarItem>
    </div>
  );
}
export default SideBar;
