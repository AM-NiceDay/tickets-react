import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { News } from '../../src/containers/News';
import Article from '../../src/components/Article';

const news = [
  { _id: '1', title: 'Test title', text: ['Test text', 'Test text 2'] },
  { _id: '2', title: 'Test title 2', text: ['Another test text'] },
];

describe('<News />', () => {
  it('renders correct amount of articles', () => {
    const wrapper = shallow(<News news={news} actions={{ getNews: x => x }} />);

    expect(wrapper.find(Article)).to.have.length(2);
  });

  it('renders articles with correct props', () => {
    const wrapper = shallow(<News news={news} actions={{ getNews: x => x }} />);

    expect(wrapper.find(Article).at(1)).to.have.prop('newsItem').deep.equal(
      { _id: '2', title: 'Test title 2', text: ['Another test text'] }
    );
  });
});
