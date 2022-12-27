function SideBarItem({ content, handleOnclick }) {
  return <a onClick={handleOnclick}>{content}</a>;
}

export default SideBarItem;
