import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type UserRegisterCredentials = {
   username: string;
   email: string;
   password: string;
};

const signUp = async (
   credentials: UserRegisterCredentials
): Promise<string> => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      credentials: "include",
   });

   if (!response.ok) {
      const message = await response.text();
      if (message.toLowerCase().includes("email")) {
         throw new Error("Email already exists.");
      }
      if (message.toLowerCase().includes("username")) {
         throw new Error("Username already exists.");
      }
      throw new Error("An unexpected error occurred.");
   }
   return response.json();
};

const SignUp = () => {
   const [username, setUsername] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [confirmPassword, setConfirmPassword] = useState<string>("");
   const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
   const navigate = useNavigate();

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (!passwordMatch) {
         toast.error("Passwords do not match.");
         return;
      }
      const credentials: UserRegisterCredentials = {
         username,
         email,
         password,
      };
      toast.promise(signUp(credentials), {
         pending: "Rejestruje...",
         success: {
            render() {
               navigate("/verify");
               return "Zarejestrowano!";
            },
         },
         error: {
            render({ data }: { data: Error }) {
               const error = data as Error;
               return error.message;
            },
         },
      });
   };
   return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary text-center text-font-primary">
         <h2 className="mb-4 text-3xl font-bold">Zarejestruj się</h2>
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
                  className="focus:shadow-outline w-full  rounded bg-input-dark  px-3 py-2 leading-tight focus:outline-none"
                  id="username"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
               />
            </div>
            <div className="mb-4">
               <label className="mb-2 block text-sm font-bold" htmlFor="email">
                  Email
               </label>
               <input
                  className="focus:shadow-outline w-full  rounded bg-input-dark  px-3 py-2 leading-tight focus:outline-none"
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </div>
            <div className="mb-4">
               <label
                  className="mb-2 block text-sm font-bold"
                  htmlFor="password"
               >
                  Hasło
               </label>
               <input
                  className="focus:shadow-outline w-full  rounded bg-input-dark px-3 py-2 leading-tight focus:outline-none"
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={e => {
                     setPassword(e.target.value);
                     setPasswordMatch(e.target.value === confirmPassword);
                  }}
               />
            </div>
            <div className="mb-6">
               <label
                  className="mb-2 block text-sm font-bold"
                  htmlFor="confirmPassword"
               >
                  Powtórz hasło
               </label>
               <input
                  className={`w-full rounded bg-input-dark  px-3 py-2 leading-tight focus:outline-none ${
                     passwordMatch ? "focus:shadow-outline" : "border-red-500"
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={e => {
                     setConfirmPassword(e.target.value);
                     setPasswordMatch(e.target.value === password);
                  }}
               />
               {!passwordMatch && (
                  <p className="text-xs italic text-red-500">
                     Hasła nie pasują do siebie.
                  </p>
               )}
            </div>
            <button
               className="focus:shadow-outline rounded bg-bg-primary px-4 py-2 font-bold text-white focus:outline-none"
               type="submit"
            >
               Zarejestruj
            </button>
         </form>
      </div>
   );
};

export default SignUp;
