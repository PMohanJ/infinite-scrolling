import {Route, Routes} from "react-router-dom"
import Login from "./components/login/login"
import Home from "./components/home/home"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;