import React from "react";
import LogIn from "../../Authentification/Login";

interface ISignInProps {
  onClick: () => void;
}

const SignIn: React.FC<ISignInProps> = (props) => {
  return (
    <div>
      <LogIn/>
    </div>
  );
}

export default SignIn;