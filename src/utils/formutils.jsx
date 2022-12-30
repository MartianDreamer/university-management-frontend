import React from "react";

const commonClassName = "m-2";
const checkboxClassName = "m-2 flex justify-between";
const label2ClassName = "font-semibold font-mono mr-4";
const label1ClassName = "font-bold font-mono";
const inputClassName = "border-2 rounded-md font-mono border-slate-600 pl-2";

const createForm = (fieldName, data, scheme) => {
  if (scheme.type === "array") {
    const rendered = [];
    const label = <p className={label1ClassName}>{scheme.label}</p>;
    data = data || [];
    rendered.push(
      ...scheme.values.map((e, id) => (
        <div key={id} className={checkboxClassName}>
          <label key={`label${id}`} htmlFor={id} className={label2ClassName}>
            {e}
          </label>
          <input
            key={`input${id}`}
            id={id}
            value={e}
            type={scheme.childType}
            onChange={scheme.handler}
            checked={data.includes(e)}
          />
        </div>
      ))
    );
    const rs = (
      <div key={fieldName} id={fieldName} className={commonClassName}>
        {label}
        {rendered}
      </div>
    );
    return rs;
  } else if (scheme.type === "object") {
    let childrenScheme = scheme.children;
    const rs = [];
    for (const e in childrenScheme) {
      rs.push(createForm(e, data && data[e], childrenScheme[e]));
    }
    return <div>{rs}</div>;
  } else {
    return (
      <div key={fieldName} className={checkboxClassName}>
        <label
          key={`label${fieldName}`}
          htmlFor={fieldName}
          className={label2ClassName}
        >
          {scheme.label}
        </label>
        <input
          key={`input${fieldName}`}
          className={inputClassName}
          id={fieldName}
          type={scheme.type}
          value={data}
          onChange={scheme.handler}
        ></input>
      </div>
    );
  }
};

export { createForm };
