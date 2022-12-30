import React, { useEffect } from "react";
import { createForm } from "../../utils/formutils";
import Button from "./Button";

function DetailModificationDialog({
  data,
  scheme,
  handleSubmit,
  handleCancel,
}) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        handleCancel(e);
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  });

  return (
    <form>
      <div className="grid grid-cols-1 border-4 rounded-lg border-slate-600 p-4 h-max w-max absolute top-64 right-1/3 bg-white">
        <div id={data !== null ? data.id : "null"}>
          {createForm(null, data, scheme)}
        </div>
        <div className="flex justify-end mt-2">
          <Button handleOnClick={handleCancel} color="red">
            Cancel
          </Button>
          <Button handleOnClick={handleSubmit} color="green">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default DetailModificationDialog;
