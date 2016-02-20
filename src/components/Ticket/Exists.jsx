import React from 'react';
import { Link } from 'react-router';

export default function({ formattedDate, route, routeName }) {
  return (
    <div>
      <div>
        <p>{formattedDate}</p>
        <h2>№{route}</h2>
        <p>{routeName}</p>
        <p>Благодарим за своевременную оплату</p>
      </div>
      <p>------------------------------------</p>
      <div>
        <p>Для предъявления проездного билета нужно нажать на кнопку ниже и предоставить контроллеру доступ к экрану телефона</p>
        <Link to="/show-ticket">Предъявить билет</Link>
      </div>
    </div>
  );
}
