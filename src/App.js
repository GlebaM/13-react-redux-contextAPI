import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const mainContent = isAuthenticated ? <UserProfile /> : <Auth />;

  return (
    <Fragment>
      <Header />
      {mainContent}
      <Counter />
    </Fragment>
  );
}

export default App;
