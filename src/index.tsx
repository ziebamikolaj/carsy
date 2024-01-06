import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./modules/navbar";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";

ReactDOM.render(
   <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" Component={Home}></Route>
         <Route path="/signin" Component={SignIn}></Route>
         <Route path="/signup" Component={SignUp}></Route>
      </Routes>
   </BrowserRouter>,
   document.getElementById("root")
);
