function SideBarItem({ handleOnclick, children }) {
  return (
    <div>
      <p onClick={handleOnclick}>{children}</p>
    </div>
  );
}

export default SideBarItem;
