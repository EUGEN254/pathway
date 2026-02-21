import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
