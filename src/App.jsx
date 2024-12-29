import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Home";
import About from "./aboutus";
import Contact from "./contact";
import LogIn from "./login";
import FeedbackSection from "./signin";
import Header from "./Header";
import Footer from "./footer";

import Api from "./api";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<FeedbackSection />} />
          <Route path="/shop" element={<Api />} />
          <Route
            path="*"
            element={<h1 className="text-center "> Not found</h1>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
