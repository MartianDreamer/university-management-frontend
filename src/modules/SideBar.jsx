import { useDispatch } from "react-redux";
import { logoutAction } from "../actions/authentication";
import SideBarItem from "./submodules/SideBarItem";

function SideBar({ selectedItem, setSelectedItem }) {
  const itemClassName =
    "cursor-pointer	p-2 bg-orange-400 rounded-md hover:bg-orange-300 mb-1 active:bg-orange-600";

  const selectedItemClassName =
    "cursor-pointer	p-2 bg-orange-600 rounded-md hover:bg-orange-300 mb-1 active:bg-orange-400";

  const dispatch = useDispatch();

  const handleSelectItem = (id) => {
    if (id === selectedItem) {
      setSelectedItem(null);
      return;
    }
    setSelectedItem(id);
  };

  const items = [
    {
      id: 1,
      name: "Account",
      handleOnClick() {
        handleSelectItem(1);
      },
    },
    {
      id: 2,
      name: "Item2",
      handleOnClick() {
        handleSelectItem(2);
      },
    },
    {
      id: 3,
      name: "Logout",
      handleOnClick() {
        handleSelectItem(1);
        dispatch(logoutAction());
      },
    },
  ];

  return (
    <div className="w-52 flex-none p-2 min-h-screen bg-orange-200 rounded-md font-semibold antialiased font-mono">
      {items.map((e) => (
        <SideBarItem
          key={e.id}
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
