import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

import { auth } from "../firebase";

const Chats = () => {
  const history = useHistory();

  // handles user logout
  const handleLogout = async () => {
    // this will logout the current logged in user
    await auth.signOut();
    // navigate user back to login page
    history.push("/");
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
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        // TODO: add username and secret
        userName='.'
        userSecret='.'
      />
    </div>
  );
};

export default Chats;
