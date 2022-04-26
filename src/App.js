import RoomList from "./pages/RoomList/RoomList";
import Room from "./pages/Room/Room";
import Home from "./pages/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import FooterSocial from "./components/Shared/Footer/FooterSocial";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room" element={<Room />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <FooterSocial />
    </BrowserRouter>
  );
}

export default App;
