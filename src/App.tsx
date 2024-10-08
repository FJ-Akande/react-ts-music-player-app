import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.page";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
