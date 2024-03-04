import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register.jsx";
import LoginPage from "./pages/Login.jsx";
import HomePage from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
