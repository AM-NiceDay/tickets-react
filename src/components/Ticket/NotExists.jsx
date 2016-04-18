import React from 'react';

export default function ({ formattedDate }) {
  return (
    <div className="page-ticket__information-wrapper">

      <div className="page-ticket__information">
        <p>{formattedDate}</p>
        <h1 className="page-ticket__availability-ticket">У вас нет билета</h1>
        <p>Стоимость билета - 4 650 руб</p>
        <p className="page-ticket__info-line">Для оплаты проезда нажмите "плюсик"</p>
      </div>

      <div className="page-ticket__footer">
          <div className="page-ticket__footer-content-wrapper">
            <p>Выберите способ оплаты</p>
            <p>Счет мобильного телефона</p>
            <p>Банковская карта</p>
            <p>PayPal</p>
          </div>
      </div>

    </div>
  );
}
