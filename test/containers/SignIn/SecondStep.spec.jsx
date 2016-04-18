import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { SecondStep } from '../../../src/containers/SignIn/SecondStep';

describe('<SignInFirstStep />', () => {
  it('renders <Form />', () => {
    const wrapper = mount(<SecondStep actions={{ getUserInfo() {} }} user={{}} draft={{}} />);

    expect(wrapper.find('.page-entry__form')).to.have.length(1);
  });
});
