import { useDispatch } from "react-redux";
import SideBarItem from "./SideBarItem";
import { logoutAction } from "../actions/authentication";
import { useState } from "react";

function SideBar() {
  const itemClassName =
    "p-2 bg-purple-400 rounded-md hover:bg-purple-300 mb-1 active:bg-purple-600";

  const selectedItemClassName =
    "p-2 bg-purple-600 rounded-md hover:bg-purple-300 mb-1 active:bg-purple-400";

  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState();

  const handleSelectItem = (id) => {
    if (id === selectedItem) {
      setSelectedItem(null);
      return;
    }
    setSelectedItem(id);
  };

  const items = [
    {
      id: 0,
      name: "Item1",
      handleOnClick() {
        handleSelectItem(0);
      },
    },
    {
      id: 1,
      name: "Logout",
      handleOnClick() {
        handleSelectItem(1);
        dispatch(logoutAction());
      },
    },
  ];

  return (
    <div className="w-52 p-2 min-h-screen bg-purple-200 rounded-md font-semibold antialiased font-mono">
      {items.map((e) => (
        <SideBarItem
          handleOnclick={e.handleOnClick}
          className={
            e.id === selectedItem ? selectedItemClassName : itemClassName
          }
        >
          {e.name}
        </SideBarItem>
      ))}
    </div>
  );
}
export default SideBar;
