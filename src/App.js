import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Profile from "./components/Profile";
import Forum from "./components/Forum.js";
import Asset from "./components/Asset.js";
import Launchpad from "./components/LaunchPad.js";
import HomePage from "./components/HomePage.js";

function App() {
  return (
    <main className="main">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/asset" element={<Asset />} />
          <Route path="/livetrade " element={<h1>Service component</h1>} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/report" element={<h1>Lets talk component</h1>} />
          <Route path="/launchpad" element={<Launchpad />} />
        </Routes>

        <Profile />
      </BrowserRouter>
    </main>
  );
}

export default App;
