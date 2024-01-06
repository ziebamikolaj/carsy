import React, { useState } from "react";

const SignUp = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
   };

   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Add your sign-up logic here
   };

   return (
      <div>
         <h2>Sign Up</h2>
         <form onSubmit={handleSubmit}>
            <label>
               Email:
               <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
               Password:
               <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
               />
            </label>
            <br />
            <button type="submit">Sign Up</button>
         </form>
      </div>
   );
};

export default SignUp;
