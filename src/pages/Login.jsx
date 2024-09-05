import React, { useEffect } from "react";
import LoginComponents from "../components/authComponents/LoginComponets";

function Login() {
  useEffect(() => {
    document.title = "Jaman Enterprise | Login";
  }, []);

  return (
    <>
      <LoginComponents />
    </>
  );
}

export default Login;
