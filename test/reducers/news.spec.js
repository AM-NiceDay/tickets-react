import { expect } from 'chai';
import reducer from '../../src/reducers/news';
import { GET_NEWS } from '../../src/actions/news';

describe('news reducer', () => {
  describe('GET_NEWS_SUCCESS action', () => {
    it('adds news to empty collection', () => {
      const actualResult = reducer({}, {
        type: `${GET_NEWS}_SUCCESS`,
        payload: [
          { _id: '1', title: 'Test title', text: ['Test text', 'Test text 2'] },
          { _id: '2', title: 'Test title 2', text: ['Another test text'] },
        ],
      });

      const expectedResult = {
        1: { _id: '1', title: 'Test title', text: ['Test text', 'Test text 2'] },
        2: { _id: '2', title: 'Test title 2', text: ['Another test text'] },
      };

      expect(actualResult).to.deep.equal(expectedResult);
    });

    it('adds news to non empty collection', () => {
      const actualResult = reducer({
        1: { _id: '1', title: 'Test title', text: ['Test text', 'Test text 2'] },
      }, {
        type: `${GET_NEWS}_SUCCESS`,
        payload: [{ _id: '2', title: 'Test title 2', text: ['Another test text'] }],
      });

      const expectedResult = {
        1: { _id: '1', title: 'Test title', text: ['Test text', 'Test text 2'] },
        2: { _id: '2', title: 'Test title 2', text: ['Another test text'] },
      };

      expect(actualResult).to.deep.equal(expectedResult);
    });

    it('updates news if passed news already exist', () => {
      const actualResult = reducer({
        1: { _id: '1', title: 'Test title', text: ['Test text', 'Test text 2'] },
        2: { _id: '2', title: 'Test title 2', text: ['Another test text'] },
      }, {
        type: `${GET_NEWS}_SUCCESS`,
        payload: [{ _id: '1', title: 'New Title', text: ['New test text'] }],
      });

      const expectedResult = {
        1: { _id: '1', title: 'New Title', text: ['New test text'] },
        2: { _id: '2', title: 'Test title 2', text: ['Another test text'] },
      };

      expect(actualResult).to.deep.equal(expectedResult);
    });
  });
});
