function SideBarItem({ handleOnclick, className, children }) {
  return (
    <div className={className}>
      <p onClick={handleOnclick}>{children}</p>
    </div>
  );
}

export default SideBarItem;
