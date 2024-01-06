import React, { useState } from "react";

const SignIn = () => {
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
      // TODO: Implement sign-in logic
   };

   return (
      <div>
         <h2>Sign In</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <label>Email:</label>
               <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
               <label>Password:</label>
               <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
               />
            </div>
            <button type="submit">Sign In</button>
         </form>
      </div>
   );
};

export default SignIn;
