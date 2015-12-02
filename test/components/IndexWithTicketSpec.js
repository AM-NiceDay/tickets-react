import React from 'react';
import IndexWithTicket from '../../src/components/IndexWithTicket';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass} from 'react-addons-test-utils';
import {expect} from 'chai';

describe('IndexWithTicket component', () => {

  it('should render current ticket', () => {
    const ticket = {
      id: '1234',
      dateCreated: Date.now()
    };

    const component = renderIntoDocument(
      <IndexWithTicket ticket={ticket} />
    );

    const id = scryRenderedDOMComponentsWithClass(component, 't-id')[0].textContent;
    const dateCreated = scryRenderedDOMComponentsWithClass(component, 't-date-created')[0].textContent;

    expect(id).to.contain(ticket.id);
    expect(dateCreated).to.contain(ticket.dateCreated.toString());
  });

});