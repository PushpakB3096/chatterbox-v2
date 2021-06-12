import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";

// lazy loading of routes
const Login = lazy(() => import("./Login"));

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        {/* <AuthProvider> */}
        <Switch>
          {/* TODO: Add proper loading page... */}
          <Suspense fallback={<div>Loading...</div>}>
            <Route path='/' component={Login} />
          </Suspense>
        </Switch>
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
