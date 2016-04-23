import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fp from 'lodash/fp';
import { getNews } from '../actions/news';
import Article from '../components/Article';

const propTypes = {
  news: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    getNews: PropTypes.func.isRequired,
  }).isRequired,
};

export class News extends Component {
  componentDidMount() {
    this.props.actions.getNews();
  }

  render() {
    const { news } = this.props;

    return (
      <div className="page-news">
        <div className="page-entry__header">
          <a className="link-element link-menu" to="/"></a>
          <span className="page-logo page-entry__logo">Новости</span>
        </div>
        {news.map(newsItem => <Article newsItem={newsItem} key={newsItem._id} />)}
      </div>
    );
  }
}

News.propTypes = propTypes;

export default connect(state => ({
  news: fp.values(state.news),
}), dispatch => ({
  actions: bindActionCreators({
    getNews,
  }, dispatch),
}))(News);
