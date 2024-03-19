import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import Landing from "./pages/landingpage/Landing";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import About from "./pages/aboutus/About";
import User from "./pages/user/User";
import Courses from "./pages/admin/Courses";
import Students from "./pages/admin/Students";
import Academy from "./pages/admin/Academy";
import UserEnrollCourse from "./pages/user/UserEnrollCourse";
import UserAcademy from "./pages/user/UserAcademy";
import Contact from "./pages/contactus/Contact";
import Support from "./pages/support/Support";
import Analytics from "./pages/admin/Analytics";

// import UserEnrollCourse from "./pages/user/UserEnrollCourse";
// import UserCourse from "./pages/user/UserAcademy";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/academy" element={<Academy />}></Route>
          <Route path="/usercourse" element={<UserEnrollCourse />}></Route>
          <Route path="/useracademy" element={<UserAcademy />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
