import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../actions/authentication";

function LoginForm() {
  const error = useSelector((state) => state.authenticate.error);
  const inputClassName = "mt-2 border-2 border-slate-600 pl-1 rounded-sm";
  const inputErrorClassName = "mt-2 border-4 border-red-600 pl-1 rounded-sm";
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(credential));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 w-96 absolute top-72 p-2 border-4 border-slate-600 rounded-md">
          <label className="mt-2 font-semibold" htmlFor="username">
            Username
          </label>
          <input
            className={(error && inputErrorClassName) || inputClassName}
            id="username"
            type="text"
            onChange={(e) =>
              setCredential({
                ...credential,
                username: e.target.value,
              })
            }
          />
          <label className="mt-2 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className={(error && inputErrorClassName) || inputClassName}
            id="password"
            type="password"
            onChange={(e) =>
              setCredential({
                ...credential,
                password: e.target.value,
              })
            }
          />
          {error && <p className="font-bold text-red-600 mt-2">Login failed</p>}
          <div className="justify-end flex mt-4 mb-2">
            <button
              type="submit"
              className="border-2 border-slate-600 rounded-md w-3/12 font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default LoginForm;
