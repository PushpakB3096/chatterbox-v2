import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h3>Welcome to ChatterBox</h3>

        <div className='login-button google'>
          <GoogleOutlined />
        </div>
      </div>
    </div>
  );
};

export default Login;
