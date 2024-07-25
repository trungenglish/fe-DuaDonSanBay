import { Footer } from "./components/footer/Footer.jsx";
import { Header } from "./components/header/Header.jsx";
import SearchBar from "./components/header/Search.jsx";
import { MainHome } from "./components/main/home/MainHome.jsx";
import { ListBooking } from "./components/main/listBooking/ListBooking.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DatChoCuaToi from "./components/main/DatChoCuaToi/DatChoCuaToi.jsx";
import LichSuDatCho from "./components/main/DatChoCuaToi/LichSuDatCho.jsx";
function App() {
  return (
    <Router>
      <Header />
      <SearchBar />
      <Routes>
        <Route exact path="/" Component={MainHome} />
        <Route path="/listBooking" Component={ListBooking} />
        <Route path="/my-booking" Component={DatChoCuaToi} />
        <Route path="/my-booking/history-booking" Component={LichSuDatCho} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
