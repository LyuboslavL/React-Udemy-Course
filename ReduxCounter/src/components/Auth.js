import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../store/index";
import classes from "./Auth.module.css";
import UserProfile from "./UserProfile";

const Auth = () => {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.email;
    const password = formData.password;

    dispatch(authActions.login());
  };

  return (
    <>
      {loggedInUser && <UserProfile />}
      {!loggedInUser && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={loginHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button>Login</button>
            </form>
          </section>
        </main>
      )}
    </>
  );
};

export default Auth;
