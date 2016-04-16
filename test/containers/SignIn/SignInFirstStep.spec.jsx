import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { FirstStep } from '../../../src/containers/SignIn/FirstStep';

describe('<SignInFirstStep />', () => {
  it('renders <Form />', () => {
    const wrapper = mount(<SignInFirstStep actions={{}} />);

    expect(wrapper.find('.page-entry__form')).to.have.length(1);
  });
});
