import React from 'react';
import { Link } from 'react-router';

export default function ({ formattedDate, route, routeName }) {
  return (
    <div className="page-ticket__information-wrapper">
      <div className="page-ticket__information">
        <p>{formattedDate}</p>
        <h1 className="page-ticket__bus-number">№{route}</h1>
        <p>{routeName}</p>
        <p className="page-ticket__info-line">Благодарим за своевременную оплату</p>
      </div>

      <div className="page-ticket__footer">
        <div className="page-ticket__footer-content-wrapper">
          <p className="page-ticket__footer-description">
            {'Для предъявления проездного билета нужно нажать на '}
            {'кнопку ниже и предоставить контроллеру доступ к экрану телефона'}
          </p>
          <Link className="button page-ticket__button" to="/show-ticket">Предъявить билет</Link>
        </div>
      </div>
    </div>
  );
}
