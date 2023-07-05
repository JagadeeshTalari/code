import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import UserRegistration from "./Components/UserRegistration";
import "./App.css";

function App() {
  return (
    <div className="AppContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar></NavBar>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="aboutus" element={<AboutUs></AboutUs>}></Route>
            <Route
              path="ourservices"
              element={<OurServices></OurServices>}
            ></Route>
            <Route path="contactus" element={<ContactUs></ContactUs>}></Route>
            <Route path="userlogin" element={<Login></Login>}></Route>
            <Route
              path="userregistration"
              element={<UserRegistration></UserRegistration>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
