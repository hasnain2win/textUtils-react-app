import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Services from "./components/Services";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#080e23";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "Textutils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "Textutils - LightMode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Codefider Tech"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />{" "}
        <br />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to Analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />

            <Route exact path="/services" element={<Services />} />
            <Route
              exact
              path="/about"
              element={<About mode={mode} showAlert={showAlert} />}
            />
          </Routes>
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
