import React from "react";
import { createForm } from "../../utils/formutils";

function DetailModificationDialog({ model, scheme }) {
  return (
    <form>
      <div
        id={model !== null ? model.id : "null"}
        className="grid grid-cols-1 border-4 rounded-lg border-slate-600"
      >
        {createForm(null, model, scheme)}
      </div>
    </form>
  );
}

export default DetailModificationDialog;
