import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Loading from "./Loading.jsx";
const Projects = lazy(() => import("./pages/projects/Projects.jsx"));
const NotFound = lazy(() => import("./pages/notFound/NotFound.jsx"));
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
export default App;
