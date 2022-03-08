import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListWorkflowComponent from "./components/ListWorkflowComponent";
import AddWorkflowComponent from "./components/AddWorkflowComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListWorkflowComponent />}></Route>
            <Route
              path="/workflows"
              element={<ListWorkflowComponent />}
            ></Route>
            <Route
              path="/add-workflow"
              element={<AddWorkflowComponent />}
            ></Route>
            <Route
              path="/edit-workflow/:id"
              element={<AddWorkflowComponent />}
            ></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
