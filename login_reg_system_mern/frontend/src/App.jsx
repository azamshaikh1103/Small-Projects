import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Profile from "./components/Profile.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import RegForm from "./components/RegForm.jsx";
import Reset from "./components/Reset.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registration" element={<RegForm />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/error" element={<PageNotFound />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
