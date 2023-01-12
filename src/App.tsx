import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Header from "./components/Header";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;