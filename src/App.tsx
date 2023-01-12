import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Home";
import Announcements from "./pages/Announcements";
import classes from "./styles.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <Header />
        <div className={classes.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </div>
        <Footer />
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
