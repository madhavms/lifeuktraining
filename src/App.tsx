import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
// import About from "./components/About";
// import UKJobMarket from "./components/UKJobMarket";
// import UKJobSectors from "./components/UKJobSectors";
// import LivingInUK from "./components/LivingInUK";
// import VisaResidence from "./components/VisaResidence";
// import ApplicationProcess from "./components/ApplicationProcess";
// import Newsletter from "./components/Newsletter";
// import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="lifeuktraining">
        <Route path="" element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="uk-job-market" element={<Home />} />
          <Route path="uk-job-sectors" element={<Home />} />
          <Route path="living-in-uk" element={<Home />} />
          <Route path="visa-residence" element={<Home />} />
          <Route path="application-process" element={<Home />} />
          <Route path="newsletter" element={<Home />} />
          <Route path="contact" element={<Home />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
