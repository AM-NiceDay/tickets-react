import React from 'react';

export default React.createClass({
  render(){
    return(
        <div className="main">
          <div className="page-entry">
            <div className="page-entry__header">
              <a className="link-element link-menu" to="/">—</a>
              <span className="page-logo page-entry__logo">Помощь</span>
            </div>
            <form className="page-feedback__form" >
              <div className="feedback-wrapper">
              <img className="tempSmiles" src="http://dummyimage.com/325x100/e8cae8/fff&text=Smiles" />
                <p className="page-feedback__description">Здесь вы можете задать любой вопрос о Tickets</p>
                <textarea className="page-entry__textarea feedback-textarea"></textarea>
              </div>
              <button className="button button_feedback-form">Отправить</button>
            </form>
          </div>
        </div>
    );
  }
});