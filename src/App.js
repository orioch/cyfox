import { BrowserRouter, Route, Routes } from "react-router-dom";

import ChangePasswordPage from "./components/pages/ChangePasswordPage/ChangePasswordPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import MainAuthPage from "./components/pages/MainAuthPage/MainAuthPage";
import SingUpPage from "./components/pages/SingUpPage/SingUpPage";
import { ROUTES } from "./utils/constants";

function App() {
  return (
    <div className="w-screen h-screen font-mono">
      <BrowserRouter>
        <Routes>
          <Route exact path={ROUTES.MAIN_AUTH} Component={MainAuthPage} />
          <Route exact path={ROUTES.DEFAULT} Component={MainAuthPage} />
          <Route exact path={ROUTES.LOGIN} Component={LoginPage} />
          <Route path={ROUTES.SIGNUP} Component={SingUpPage} />
          <Route path={ROUTES.CHANGE_PASSWORD} Component={ChangePasswordPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
