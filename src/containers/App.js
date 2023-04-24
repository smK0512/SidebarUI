import React from "react";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "../containers/App.css";
import Valid_Records from "../components/Valid_Records";
import Invalid_Records from "../components/Invalid_Records";
import Visualization from "../components/Visualization";
import Notification from "../components/Notification";
import Production from "../components/Production"
function App() {
  
  return (
    <div className="main__Container">
      <Sidebar></Sidebar>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home ></Home>}></Route>
          <Route
            exact
            path="/plc_input"
            element={<Valid_Records ></Valid_Records>}
          ></Route>
          <Route
            exact
            path="/plc_output"
            element={<Invalid_Records></Invalid_Records>}
          ></Route>
          <Route
            exact
            path="/Notification"
            element={<Notification></Notification>}
          ></Route>
          <Route
            exact
            path="/prod_count"
            element={<Production></Production>}
          ></Route>
          <Route
            exact
            path="/visualization"
            element={<Visualization></Visualization>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
