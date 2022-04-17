import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Adminlogin } from "./Components/Admin-login";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/admin-login">Admin-Login</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin-login" element={<Adminlogin />}></Route>
        </Routes>
      </div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
