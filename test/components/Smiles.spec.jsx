import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Smiles from '../../src/components/Smiles';

describe.only('<Smiles />', () => {
  it('renders three smiles', () => {
    const wrapper = shallow(<Smiles currentReaction="" onReactionChange={x => x} />);

    expect(wrapper.children()).to.have.length(3);
  });

  it('doesn\'t play down choosen reaction', () => {
    const wrapper = shallow(<Smiles currentReaction="positive" onReactionChange={x => x} />);

    expect(wrapper.children().at(0)).to.not.have.style('color').equals('gray');
  });

  it('plays down not choosen reactions', () => {
    const wrapper = shallow(<Smiles currentReaction="positive" onReactionChange={x => x} />);

    expect(wrapper.children().at(1)).to.have.style('color').equals('gray');
    expect(wrapper.children().at(2)).to.have.style('color').equals('gray');
  });

  it('calls change handler with positive reaction when positive smile was clicked', () => {
    const onReactionChange = sinon.spy();
    const wrapper = shallow(<Smiles currentReaction="" onReactionChange={onReactionChange} />);

    wrapper.children().at(0).simulate('click');
    expect(onReactionChange).to.have.been.calledWith('positive');
  });

  it('calls change handler with neutral reaction when neutral smile was clicked', () => {
    const onReactionChange = sinon.spy();
    const wrapper = shallow(<Smiles currentReaction="" onReactionChange={onReactionChange} />);

    wrapper.children().at(1).simulate('click');
    expect(onReactionChange).to.have.been.calledWith('neutral');
  });

  it('calls change handler with negative reaction when negative smile was clicked', () => {
    const onReactionChange = sinon.spy();
    const wrapper = shallow(<Smiles currentReaction="" onReactionChange={onReactionChange} />);

    wrapper.children().at(2).simulate('click');
    expect(onReactionChange).to.have.been.calledWith('negative');
  });
});
