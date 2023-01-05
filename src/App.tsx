import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
