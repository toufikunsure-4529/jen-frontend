import React, { useEffect } from "react";
import SignupComponents from "../components/authComponents/SignupComponents";
function Signup() {
  useEffect(() => {
    document.title = "Jaman Enterprise | Signup";
  }, []);
  return (
    <>
      <SignupComponents />
    </>
  );
}

export default Signup;
