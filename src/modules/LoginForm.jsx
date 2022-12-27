import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/authentication";

function LoginForm() {
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
      <div className="grid grid-cols-1 w-2/12 absolute top-72 p-2 border-4 border-slate-600 rounded-md">
        <label className="mt-2" htmlFor="username">
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
        <label className="mt-2" htmlFor="password">
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
        <div className="justify-end flex mt-4 mb-2">
          <button
            className="border-2 border-slate-600 rounded-md w-3/12"
            onClick={handleSubmit}
          >
            Submit!
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
