import React from 'react';

export default function({ formattedDate }) {
  return (
    <div>
      <div>
        <p>{formattedDate}</p>
        <h2>У вас нет билета</h2>
        <p>Стоимость билета - 4 650 руб</p>
        <p>Для оплаты проезда нажмите "плюсик"</p>
      </div>
      <p>------------------------------------</p>
      <div>
        <p>Выберите способ оплаты</p>
        <p>Счет мобильного телефона</p>
        <p>Банковская карта</p>
        <p>PayPal</p>
      </div>
    </div>
  );
}
