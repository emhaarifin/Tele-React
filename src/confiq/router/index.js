import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Home from "@/pages/Home";
import io from "socket.io-client";
import ForgotPassword from "@/pages/ForgotPassword";
import PrivateRoute from "./module/PrivateRoute";
function Router() {
  const [socket, setSocket] = React.useState(null);
  const setupSocket = () => {
    const token = localStorage.getItem("KEY_TOKEN");
    if (token && !socket) {
      const resultSocket = io("http://localhost:4000/", {
        query: {
          token: token,
        },
      });
      setSocket(resultSocket);
    }
  };

  React.useEffect(() => {
    setupSocket();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} socket={socket} />} />
        <Route exact path='/login' render={(props) => <Login {...props} setSocket={setSocket} />} />
        <Route path='/register' render={(props) => <Register {...props} />} />
        <Route path='/forgot-password' render={(props) => <ForgotPassword {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
