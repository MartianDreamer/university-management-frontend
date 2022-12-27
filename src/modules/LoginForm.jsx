function LoginForm(props) {
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" />
      <button>Submit!</button>
    </div>
  );
}
export default LoginForm;
