import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Profile from "./components/Profile";
import Forum from "./components/Forum.js";

function App() {
  return (
    <main className="main">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home Component</h1>} />
          <Route path="/asset" element={<h1>About Component</h1>} />
          <Route path="/livetrade " element={<h1>Service component</h1>} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/report" element={<h1>Lets talk component</h1>} />
          <Route path="/launchpad" element={<h1>launchpad</h1>} />
        </Routes>

        <Profile />
      </BrowserRouter>
    </main>
  );
}

export default App;
