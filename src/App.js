import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Profile from "./components/Profile";
function App() {
  return (
    <main className="main">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home Component</h1>} />
          <Route path="/about" element={<h1>About Component</h1>} />
          <Route path="/services" element={<h1>Service component</h1>} />
          <Route path="/portfolio" element={<h1>Portfolio component</h1>} />
          <Route path="/talk" element={<h1>Lets talk component</h1>} />
        </Routes>
        <Profile />
      </BrowserRouter>
    </main>
  );
}

export default App;
