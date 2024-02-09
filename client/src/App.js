import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/pages/LoginPage/LoginPage";
import HomePage from "./components/pages/HomePage/HomePage";
import SingUpPage from "./components/pages/SingUpPage/SingUpPage";
import ChangePasswordPage from "./components/pages/ChangePasswordPage/ChangePasswordPage";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={LoginPage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/signup" Component={SingUpPage} />
          <Route path="/change-password" Component={ChangePasswordPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
