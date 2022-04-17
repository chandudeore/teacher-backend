import { Route, Routes } from "react-router";
import "./App.css";
import { Adminlogin } from "./Components/Admin-login";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin-login" element={<Adminlogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
