import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

function TestComponent({ name }) {
  return (
    <div>{name}</div>
  );
}

TestComponent.propTypes = {
  name: PropTypes.string.require,
};

describe('<TestComponent />', () => {
  it('should render current ticket', () => {
    const wrapper = shallow(<TestComponent name="Test" />);

    expect(wrapper.find('div')).to.have.text('Test');
  });
});
