import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Article from '../../src/components/Article';

const newsItem = { title: 'Test title', text: ['Test text', 'Another test text'] };

describe('<Article />', () => {
  it('renders title correctly', () => {
    const wrapper = shallow(<Article newsItem={newsItem} />);

    expect(wrapper.find('.news__heading')).to.have.text('Test title');
  });

  it('renders correct amount of text items', () => {
    const wrapper = shallow(<Article newsItem={newsItem} />);

    expect(wrapper.find('.news-wrapper').find('p')).to.have.length(2);
  });

  it('renders correctly text item', () => {
    const wrapper = shallow(<Article newsItem={newsItem} />);

    expect(wrapper.find('.news-wrapper').find('p').at(1)).to.have.text('Another test text');
  });
});
