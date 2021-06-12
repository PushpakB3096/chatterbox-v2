import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const history = useHistory();
  // gets the current logged in user from the context store
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      //if user is not logged in, take them back to the login page
      history.push("/");
      return;
    }
    // below code is for when the user is logged in
    const ME_URL = "https://api.chatengine.io/users/me";
    const POST_URL = "https://api.chatengine.io/users/";

    // checks if the user is present and loggedin on ChatEngine
    axios
      .get(ME_URL, {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
          "user-name": user.email,
          "user-secret": user.uid
        }
      })
      .then(() => {
        // once we have the data, load the component
        setLoading(false);
      })
      .catch(() => {
        // if the ChatEngine profile doesn't exist, create a new one
        let newUser = new FormData();
        newUser.append("email", user.email);
        // username is email because we want the username to be unique
        newUser.append("username", user.email);
        newUser.append("secret", user.uid);

        // get and set the profile pic of the user
        getFile(user.photoURL).then(avatar => {
          newUser.append("avatar", avatar, avatar.name);
        });

        // newUser contains our newly created user, submit this user to ChatEngine and create a new user
        axios
          .post(POST_URL, newUser, {
            headers: {
              "private-key": process.env.REACT_APP_CHAT_ENGINE_SECRET
            }
          })
          .then(() => {
            // new user is created, now show the chat page
            setLoading(false);
          })
          .catch(err => console.error("Error in creating user", err));
      });
  }, [user, history]);

  // handles user logout
  const handleLogout = async () => {
    // this will logout the current logged in user
    await auth.signOut();
    // navigate user back to login page
    history.push("/");
  };

  // handles user profile images
  const getFile = async url => {
    const response = await fetch(url);
    const data = await response.blob();

    // creates a new image
    const imgFile = new File([data], `${user.displayName}Profile.jpg`, {
      type: "image/jpeg"
    });

    return imgFile;
  };

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>ChatterBox</div>
        <div className='logout-tab' onClick={() => handleLogout()}>
          Logout
        </div>
      </div>

      {/* TODO: move inline style to css */}
      <ChatEngine
        height='calc(100vh - 66px)'
        projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        userName={user && user.email}
        userSecret={user && user.uid}
      />
    </div>
  );
};

export default Chats;
