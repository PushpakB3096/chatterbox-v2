import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

import { auth } from "../firebase";

const Chats = () => {
  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>ChatterBox</div>
        <div className='logout-tab'>Logout</div>
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
