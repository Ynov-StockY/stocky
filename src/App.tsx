import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Icon from "./components/Icon";
import IconButton from "./components/IconButton";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <IconButton
                icon={
                  <Icon
                    src="https://i.ebayimg.com/images/g/8dsAAOSwo79Z04Kw/s-l500.jpg"
                    size="md"
                    alt=""
                  />
                }
                onClick={() => console.log("coucou")}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
