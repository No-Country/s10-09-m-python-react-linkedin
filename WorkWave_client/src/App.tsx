import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/register";
import RegisterDetail from "./components/RegisterDetail";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:step" element={<RegisterDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
