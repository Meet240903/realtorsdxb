import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ProjectsPage from "./components/ProjectsPage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ProjectDetailsPage from "./components/ProjectDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/projects' element={<ProjectsPage />} />
          <Route exact path='/contact-us' element={<ContactUs />} />
          <Route exact path='/projects/:slugs' element={<ProjectDetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
