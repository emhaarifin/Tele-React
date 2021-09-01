import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Home from '@/pages/Home';
import io from 'socket.io-client';
import ForgotPassword from '@/pages/ForgotPassword';

import PrivateRoute from './module/PrivateRouter';
import PublicRoute from './module/PublicRouter';
function Router() {
  const [socket, setSocket] = React.useState(null);
  const setupSocket = () => {
    const token = localStorage.getItem('KEY_TOKEN');
    if (token && !socket) {
      const resultSocket = io('http://localhost:4000/', {
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
        <PrivateRoute exact path="/" component={Home} socket={socket} />
        <PublicRoute path="/login" component={Login} setSocket={setSocket} />
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
