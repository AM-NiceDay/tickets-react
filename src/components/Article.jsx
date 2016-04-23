import React, { PropTypes } from 'react';

function Article({ newsItem }) {
  return (
    <span className="news-wrapper">
      <h1 className="news__heading">{newsItem.title}</h1>
      {
        newsItem.text.map(textItem => (
          <p key={textItem}>{textItem}</p>
        ))
      }
    </span>
  );
}

Article.propTypes = {
  newsItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
  }).isRequired,
};

export default Article;
