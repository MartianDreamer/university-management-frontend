import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../actions/authentication";

function LoginForm() {
  const error = useSelector((state) => state.authenticate.error);
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
    <div className="flex justify-center">
      <div className="grid grid-cols-1 w-96 absolute top-72 p-2 border-4 border-slate-600 rounded-md">
        <label className="mt-2 font-semibold" htmlFor="username">
          Username
        </label>
        <input
          className="mt-2 border-2 border-slate-600"
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
          className="mt-2 border-2 border-slate-600"
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
            className="border-2 border-slate-600 rounded-md w-3/12 font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
