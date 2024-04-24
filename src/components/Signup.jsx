// Signup.js
import { Email } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const inputElement = useRef(null);
  const handleClick = () => {
    if (!email) {
      inputElement.current.style.border = "5px solid red";
      inputElement.current.focus();
    }
  };

  useEffect(() => {
    if (email) {
      inputElement.current.style.border = "none";
    }
  }, [email]);

  return (
    <>
      <input
        ref={inputElement}
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleClick}>signup</button>
    </>
  );
}

export default Signup;
