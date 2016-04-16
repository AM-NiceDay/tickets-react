import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Index from './containers/Index';
import SignIn from './containers/SignIn';
import SignInFirstStep from './containers/SignIn/FirstStep';
import SignInSecondStep from './containers/SignIn/SecondStep';
/*
import SignUp from './containers/SignUp';
import SignUpFirstStep from './containers/SignUp/SignUpFirstStep';
import SignUpSecondStep from './containers/SignUp/SignUpSecondStep';
import SignUpThirdStep from './containers/SignUp/SignUpThirdStep';
import SignUpForthStep from './containers/SignUp/SignUpForthStep';
import Ticket from './containers/Ticket';
import BuyTicket from './containers/BuyTicket';
import ShowTicket from './containers/ShowTicket';
import VerifyBusTickets from './containers/VerifyBusTickets';
import IndexMarkup from './containers/markup/Index.jsx';
import CommentMarkup from './containers/markup/Comment.jsx';
import HelpMarkup from './containers/markup/Help.jsx';
import AboutMarkup from './containers/markup/About.jsx';
import NewsMarkup from './containers/markup/News.jsx';
import NewsExpandedMarkup from './containers/markup/NewsExpanded.jsx';
import IndexControlMarkup from './containers/markup/IndexControl.jsx';
import TempPageNotForUseMarkup from './containers/markup/TempPageNotForUse.jsx';*/

export default function getRoutes({ requireAuth/* , requireController, requireTicket */ }) { // eslint-disable-line react/prop-types
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Index} onEnter={requireAuth} />

      <Route path="signin" component={SignIn}>
        <IndexRoute component={SignInFirstStep} />
        <Route path="1" component={SignInFirstStep} />
        <Route path="2" component={SignInSecondStep} />
      </Route>
    </Route>
  );
}

/*
<Route path="signin" component={SignIn}>
  <IndexRoute component={SignInFirstStep} />
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
  <Route path="show-ticket" component={ShowTicket} onEnter={requireTicket} />
  <Route
path="verify-bus-tickets/:busCode"
component={VerifyBusTickets}
onEnter={requireController}
  />
  <Route path="markup">
  <Route path="Index" component={IndexMarkup} />
  <Route path="Comment" component={CommentMarkup} />
  <Route path="Help" component={HelpMarkup} />
  <Route path="About" component={AboutMarkup} />
  <Route path="News" component={NewsMarkup} />
  <Route path="NewsExpanded" component={NewsExpandedMarkup} />
  <Route path="IndexControl" component={IndexControlMarkup} />
  <Route path="TempPageNotForUse" component={TempPageNotForUseMarkup} />
  <Route path="2" component={SignInSecondStep} />
  </Route>
  */
