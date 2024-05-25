const FormLogin = () => {
  return (
    <form className="w-1/2 text-center">
      <input
        type="text"
        name="username"
        placeholder="username"
        autocomplete="off"
        className="shadow-md border w-full h-10 px-3 py-2 text-primary focus:outline-none focus:border-primary mb-3 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        autocomplete="off"
        className="shadow-md border w-full h-10 px-3 py-2 text-primary focus:outline-none focus:border-primary mb-3 rounded"
      />
      <button className="btn btn-secondary max-w-md w-full">Sign In</button>
    </form>
  );
};
export default FormLogin;
