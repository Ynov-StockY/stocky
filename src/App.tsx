import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useParams } from "react-router-dom";
import About from "./About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Home";
import classes from './styles.module.css';

function App() {


  return (
    <div className={classes.app}>
      <Router>
        <Header/>
        <div className={classes.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;