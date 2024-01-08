import { Link } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error has occured!</h1>
        <p>Could not find this page.</p>
        <p>
          Why don't you go back to the <Link to="/">Homepage</Link>
        </p>
      </main>
    </>
  );
}

export default ErrorPage;
