import { Link } from "react-router-dom";
import useIsAuthState from "../states/useIsAuth";
import useUserState from "../states/useUserState";
import Cookies from "js-cookie";

export const NavBar = () => {
  const isAuth = useIsAuthState((s) => s.isAuth);
  const user = useUserState((s) => s.user);
  const setUser = useUserState(s => s.setUser);
  const setAuth = useIsAuthState(s => s.setIsAuth);

  const logout = () => {
    Cookies.remove('token');
    setAuth(false);
    setUser(null);
  }

  return (
    <nav className="bg-sky-400 py-3 px-5">
      <ul className="flex text-white sm:text-xl text-lg justify-between">
        <li className="flex cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
              clipRule="evenodd"
            />
          </svg>
          Fix
        </li>
        <div className="flex gap-5 mx-5">
          {isAuth ? (
            <>
              <li>Welcome {user!.name}</li>
              <Link
                className="hover:text-slate-200 cursor-pointer"
                to="/login"
                onClick={logout}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                className="hover:text-slate-200 cursor-pointer"
                to="/register"
              >
                Register
              </Link>
              <Link  to='/login' className="hover:text-slate-200 cursor-pointer">Login</Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};
