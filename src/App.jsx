import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AutoPopupModal from "./Components/AutoPopupModal/AutoPopupModal";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { LanguageProvider } from "./LanguageContext";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <LanguageProvider>
        <ScrollToTop />
        <Header />
        <AutoPopupModal />
        <Outlet />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
