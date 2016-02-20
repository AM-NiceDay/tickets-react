import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Index from './containers/Index';
import SignIn from './containers/SignIn';
import SignInFirstStep from './containers/SignIn/SignInFirstStep';
import SignInSecondStep from './containers/SignIn/SignInSecondStep';
import SignUp from './containers/SignUp';
import SignUpFirstStep from './containers/SignUp/SignUpFirstStep';
import SignUpSecondStep from './containers/SignUp/SignUpSecondStep';
import SignUpThirdStep from './containers/SignUp/SignUpThirdStep';
import SignUpForthStep from './containers/SignUp/SignUpForthStep';
import Ticket from './containers/Ticket';
import BuyTicket from './containers/BuyTicket';

export default (requireAuth) => <Route path="/" component={App}>
  <IndexRoute component={Index} onEnter={requireAuth} />
  <Route path="signin" component={SignIn}>
    <IndexRoute component={SignInFirstStep} />
    <Route path="1" component={SignInFirstStep} />
    <Route path="2" component={SignInSecondStep} />
  </Route>
  <Route path="signup" component={SignUp}>
    <IndexRoute component={SignUpFirstStep} />
    <Route path="1" component={SignUpFirstStep} />
    <Route path="2" component={SignUpSecondStep} />
    <Route path="3" component={SignUpThirdStep} />
    <Route path="4" component={SignUpForthStep} />
  </Route>
  <Route path="ticket" component={Ticket} />
  <Route path="buy" component={BuyTicket} onEnter={requireAuth} />
</Route>;
