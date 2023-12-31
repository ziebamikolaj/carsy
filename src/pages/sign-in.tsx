import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type UserCredentials = {
   username: string;
   password: string;
};

const signIn = async (credentials: UserCredentials): Promise<string> => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      credentials: "include",
   });

   if (!response.ok) {
      throw new Error("Network response was not ok");
   }
   return response.json();
};

const SignIn = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const queryClient = useQueryClient();

   const mutation = useMutation<string, Error, UserCredentials>({
      mutationFn: signIn,
   });
   const navigate = useNavigate();

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      toast.promise(mutation.mutateAsync({ username, password }), {
         pending: "Signing in...",
         success: {
            render() {
               navigate("/account");
               queryClient.invalidateQueries({ queryKey: ["authCheck"] });
               return "Signed in successfully!";
            },
         },
         error: "Sign in failed. Please try again.",
      });
   };

   return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary text-center  text-font-primary">
         <h2 className="mb-4 text-3xl font-bold">Sign In</h2>
         <form
            className="mb-4 rounded-xl bg-bg-secondary px-8 pb-8 pt-6 shadow-md"
            onSubmit={handleSubmit}
         >
            <div className="mb-4">
               <label
                  className="mb-2 block text-sm font-bold"
                  htmlFor="username"
               >
                  Username
               </label>
               <input
                  className="focus:shadow-outline w-full appearance-none rounded bg-input-dark  px-3 py-2 leading-tight shadow focus:outline-none"
                  id="username"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
               />
            </div>
            <div className="mb-6">
               <label
                  className="mb-2 block text-sm font-bold"
                  htmlFor="password"
               >
                  Password
               </label>
               <input
                  className="focus:shadow-outline w-full appearance-none rounded bg-input-dark px-3 py-2 leading-tight shadow focus:outline-none"
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
            </div>
            <button
               className="focus:shadow-outline rounded bg-bg-primary px-4 py-2 font-bold hover:bg-nav-bg focus:outline-none"
               type="submit"
            >
               Sign In
            </button>
         </form>
      </div>
   );
};

export default SignIn;
