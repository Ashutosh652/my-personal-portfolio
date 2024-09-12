import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main"; // fallback for lazy pages
import "./static/css/main.scss"; // All of our styles

const PUBLIC_URL = import.meta.env.BASE_URL;

const Index = lazy(() => import("./pages/Index"));

const App = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
