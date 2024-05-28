import { use } from "react";
import { UserContext } from "../../context/user";
import ThemeChange from "./ChangeTheme";
import { Link } from "react-router-dom";
import LogOutButton from "../user/LogOutButton";
const NavBar = () => {
  const { id, firstName, isLogged, updateUser } = use(UserContext);
  return (
    <>
      {isLogged ? (
        <nav className="navbar bg-accent shadow-xl">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">ReactSocial-19</a>
          </div>
          <div className="mx-4">
            <ThemeChange />
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <LogOutButton />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar bg-accent shadow-xl">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              ReactSocial-19
            </Link>
          </div>
          <div className="mx-5">
            <ThemeChange />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-x-5">
              <Link className="btn btn-sm  btn-secondary" to="/login">
                <li>Login</li>
              </Link>
              <Link className="btn btn-sm btn-secondary" to="/register">
                <li>SignIn</li>
              </Link>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;

{
}
