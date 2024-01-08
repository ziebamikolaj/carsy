import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type VerifyEmailCredentials = {
   email: string;
   code: string;
};
const verifyEmail = async (
   credentials: VerifyEmailCredentials
): Promise<any> => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      credentials: "include",
   });

   if (!response.ok) {
      const message = await response.text();
      if (message.toLowerCase().includes("incorrect")) {
         throw new Error("Verification code is incorrect.");
      } else if (message.toLowerCase().includes("not found")) {
         throw new Error("Email not found.");
      } else {
         throw new Error("Network response was not ok");
      }
   }
   return response.json();
};

const VerifyEmail = () => {
   const [email, setEmail] = useState("");
   const [code, setCode] = useState("");
   const navigate = useNavigate();

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const credentials: VerifyEmailCredentials = {
         email,
         code,
      };
      toast.promise(verifyEmail(credentials), {
         pending: "Verifying email...",
         success: {
            render() {
               navigate("/signin");
               return "Email verified successfully!";
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
         <h2 className="mb-4 text-3xl font-bold">Verify Email</h2>
         <form
            className="mb-4 rounded-xl bg-bg-secondary  px-8 pb-8 pt-6 shadow-md"
            onSubmit={handleSubmit}
         >
            <div className="mb-4">
               <label className="mb-2 block text-sm font-bold" htmlFor="email">
                  Email
               </label>
               <input
                  className="focus:shadow-outline w-full rounded bg-input-dark px-3 py-2 leading-tight focus:outline-none"
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </div>
            <div className="mb-4">
               <label className="mb-2 block text-sm font-bold" htmlFor="code">
                  Verification Code
               </label>
               <input
                  className={`w-full rounded bg-input-dark px-3 py-2 leading-tight focus:outline-none 
                  
                  `}
                  id="code"
                  name="code"
                  type="text"
                  value={code}
                  onChange={e => {
                     setCode(e.target.value);
                  }}
               />
            </div>
            <button
               className="focus:shadow-outline rounded bg-bg-primary px-4 py-2 font-bold text-white focus:outline-none"
               type="submit"
            >
               Verify Email
            </button>
         </form>
      </div>
   );
};

export default VerifyEmail;
