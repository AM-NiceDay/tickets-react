import React from 'react';

function About() {
  return (
    <div className="page-about">
      <div className="page-entry__header">
        <a className="link-element link-menu" to="/"></a>
        <span className="page-logo page-entry__logo">О проекте</span>
      </div>
        <span className="about-project-wrapper">
          <p className="page-about__description">
            <p className="font_bold">Tickets</p>
            {' – представляет собой платформу, позволяющую более удобно использовать систему '}
            {'общественного транспорта. Основной особенностью данной платформы является '}
            {'возможность оплаты проезда через интернет со снятием денег со счета мобильного '}
            {'телефона.'}
          </p>
          <p className="page-about__description">
            Задача <p className="font_bold">Tickets</p>
            {' – в каждый отдельно взятый момент оставаться наиболее современным.'}
          </p>
        </span>
    </div>
  );
}

export default About;
