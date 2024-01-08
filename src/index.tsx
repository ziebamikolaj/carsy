import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./modules/navbar";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/verify";
import { AuthProvider } from "./AuthContext";
import Account from "./pages/account";
import SignOut from "./pages/signout";

const queryClient = new QueryClient();

const domNode = document.getElementById("root");
if (domNode) {
   const root = createRoot(domNode);
   root.render(
      <AuthProvider>
         <QueryClientProvider client={queryClient}>
            <BrowserRouter>
               <Navbar />
               <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/signin" element={<SignIn />}></Route>
                  <Route path="/signup" element={<SignUp />}></Route>
                  <Route path="/verify" element={<Verify />}></Route>
                  <Route path="/signout" element={<SignOut />}></Route>
                  <Route path="/account" element={<Account />}></Route>
               </Routes>
               <ToastContainer position="bottom-right" theme="dark" />
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
         </QueryClientProvider>
      </AuthProvider>
   );
}
