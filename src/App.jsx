import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AutoPopupModal from "./Components/AutoPopupModal/AutoPopupModal";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <AutoPopupModal />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
