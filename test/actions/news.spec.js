import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import api from '../../src/middlewares/api';
import { getNews, GET_NEWS } from '../../src/actions/news';

const middlewares = [thunk, api()];
const mockStore = configureMockStore(middlewares);

describe('news actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('getNews', () => {
    it('creates GET_NEWS_SUCCESS when fetching news has been done', () => {
      nock('http://localhost:3000/')
        .get('/news')
        .reply(200, [{ title: 'Test title' }]);

      const store = mockStore({ user: { index: { token: '' } } });

      const expectedActions = [
        { type: `${GET_NEWS}_LOADING`, payload: {} },
        { type: `${GET_NEWS}_SUCCESS`, payload: [{ title: 'Test title' }] },
      ];

      return store.dispatch(getNews())
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });
  });
});
