import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import "firebase/app";

import { auth } from "../firebase";

const Login = () => {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h3>Welcome to ChatterBox!</h3>
        <div
          className='login-button google'
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br /> <br />
        <div
          className='login-button github'
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())
          }
        >
          <GithubOutlined /> Sign in with GitHub
        </div>
      </div>
    </div>
  );
};

export default Login;
