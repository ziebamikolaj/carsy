import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const handleSignOut = async () => {
   const navigate = useNavigate();
   const queryClient = useQueryClient();

   const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/signout`,
      {
         credentials: "include",
         method: "POST",
      }
   );

   if (response.ok) {
      toast.success("Signed out successfully!");
      queryClient.invalidateQueries({ queryKey: ["authCheck"] });
      navigate("/");
   } else {
      throw new Error("Network response was not ok");
   }
};

const SignOut = () => {
   handleSignOut();
   return (
      <div className="te xt-font-primary flex min-h-screen flex-col items-center justify-center  bg-bg-primary  text-center">
         <h2 className="mb-4 text-3xl font-bold">Wylogowuje...</h2>
      </div>
   );
};

export default SignOut;
