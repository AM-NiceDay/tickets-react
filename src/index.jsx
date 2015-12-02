import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import IndexWithTicket from './components/IndexWithTicket';

const ticket = {
  id: 123,
  dateCreated: new Date()
};

ReactDOM.render(<IndexWithTicket ticket={ticket} />, document.getElementById('app'));
