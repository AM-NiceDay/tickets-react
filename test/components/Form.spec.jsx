import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Form from '../../src/components/Form';

describe('<Form />', () => {
  it('renders input label', () => {
    const wrapper = shallow(<Form inputLabel="Test label" />);

    expect(wrapper.find('.page-entry__description')).to.have.text('Test label');
  });

  it('renders input prefix', () => {
    const wrapper = shallow(<Form inputPrefix="Test prefix" />);

    expect(wrapper.find('.page-entry__input-prefix')).to.contain.text('Test prefix');
  });

  it('renders info text', () => {
    const wrapper = shallow(<Form infoText="Info text" />);

    expect(wrapper.find('.page-entry__extra-info')).to.have.text('Info text');
  });

  it('doesn\'t renders info text if it isn\'t passed', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.find('.page-entry__extra-info')).be.not.present();
  });

  it('renders enabled button if isValid is false', () => {
    const wrapper = shallow(<Form isValid={true} />);

    expect(wrapper.find('button')).to.not.have.attr('disabled');
  });

  it('renders disabled button if isValid isn\'t passed', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.find('button')).to.have.attr('disabled');
  });

  it('renders disabled button if isValid is false', () => {
    const wrapper = shallow(<Form isValid={false} />);

    expect(wrapper.find('button')).to.have.attr('disabled');
  });

  it('calls onChange when input value changes', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<Form onChange={onChange} />);

    wrapper.find('.page-entry__input').simulate('change', { target: { value: '123456789' } });
    expect(onChange).to.have.callCount(1);
    expect(onChange).to.have.been.calledWith('123456789');
  });

  it('calls onSubmit when button is clicked', () => {
    const onSubmit = sinon.spy();
    const wrapper = shallow(<Form onSubmit={onSubmit} />);

    wrapper.find('.button').simulate('click');
    expect(onSubmit).to.have.callCount(1);
  });
});
