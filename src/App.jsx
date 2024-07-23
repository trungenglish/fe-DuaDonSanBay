import { Footer } from "./components/footer/Footer.jsx";
import { Header } from "./components/header/Header.jsx";
import SearchBar from "./components/header/Search.jsx";
import { MainHome } from "./components/main/home/MainHome.jsx";
import { ListBooking } from "./components/main/listBooking/ListBooking.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <SearchBar />
      <Routes>
        <Route exact path="/" Component={MainHome} />
        <Route path="/listBooking" Component={ListBooking} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
