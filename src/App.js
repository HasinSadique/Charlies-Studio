import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import Blog from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Chalie's Studio";
  }, []);
  return (
    <div className="App">
      <header>
        <Navbar> </Navbar>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/service-section"
            element={<ServiceSection> </ServiceSection>}
          />
          <Route path="/blog" element={<Blog> </Blog>} />
          <Route path="/about" element={<About> </About>} />
          <Route path="*" element={<NotFound> </NotFound>} />
        </Routes>
      </body>
      <footer>
        <Footer> </Footer>
      </footer>
    </div>
  );
}

export default App;
