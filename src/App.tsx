import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Icon from "./components/Icon";
import IconButton from "./components/IconButton";
import Announcements from "./pages/Announcements";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<>home</>} />
          <Route path="/announcements" element={<Announcements />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
