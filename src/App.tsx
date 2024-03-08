import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserTable from "./components/UserTable";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route path="/details/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
