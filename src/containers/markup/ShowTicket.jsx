import React from 'react';

export default React.createClass({
  render(){
    return(
        <div className="main">
          <div className="page-entry">
            <div className="page-entry__header">
              <a className="link-element page-entry__link-element" to="/ticket">{'←'}</a>
              <span className="page-logo page-entry__logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#39214f">
                  <path d="M20,12A2,2 0 0,0 22,14V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V14C3.11,14 4,13.1 4,12A2,2 0 0,0 2,10V6C2,4.89 2.9,4 4,4H20A2,2 0 0,1 22,6V10A2,2 0 0,0 20,12M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5V16.25M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z" />
                </svg>
              </span>
            </div>
            <div className="showticket">
              <p className="ticket-info__description">Код билета</p>
              <h2 className="ticket-info-id ticket-info-id_large">RW34</h2>
              <p className="ticket-info__description">Время оплаты</p>
              <p className="ticket-info__time ticket-info_bold">
                23:26
                {','}
              </p>
              <p className="ticket-info__time">22 Февраля 2016</p>
              <p className="ticket-info__description">Номер маршрута</p>
              <h3 className="bus-number">№21</h3>
              <p className="ticket-info__description">Код автотранспорта</p>
              <p className="ticket-info_bold">1001</p>
              <div className="showticket-help">
                <p className="help-description">При возникновении каких-либо проблем,
                  Вы можете в любое время сообщить нам о них.
                  Мы обязательно рассмотрим заявку
                  в самые короткие сроки и ответим обязательно Вам</p>
                <button className="button">Помощь</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
});