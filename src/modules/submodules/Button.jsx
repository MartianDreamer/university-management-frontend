function Button({ handleOnClick, children, isDisable, color }) {
  let buttonClass;
  switch (color) {
    case "red":
      buttonClass =
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4";
      break;
    case "green":
      buttonClass =
        "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4";
      break;
    default:
      buttonClass =
        "bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded m-4";
      break;
  }
  return isDisable ? (
    <button
      type="button"
      onClick={handleOnClick}
      disabled
      className={buttonClass + " opacity-50"}
    >
      {children}
    </button>
  ) : (
    <button type="button" onClick={handleOnClick} className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;
