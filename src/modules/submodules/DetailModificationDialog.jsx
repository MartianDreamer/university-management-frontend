import React from "react";
import { createForm } from "../../utils/formutils";
import Button from "./Button";

function DetailModificationDialog({
  data,
  scheme,
  handleSubmit,
  handleCancel,
}) {
  return (
      <form>
        <div className="grid grid-cols-1 border-4 rounded-lg border-slate-600 p-4 h-max w-max absolute top-1/4 left-1/2 bg-white">
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
