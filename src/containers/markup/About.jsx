import React from 'react';

export default React.createClass({
  render(){
    return(
        <div className="page-about">
          <div className="page-entry__header">
            <a className="link-element link-menu" to="/"></a>
            <span className="page-logo page-entry__logo">О проекте</span>
          </div>
          <span className="about-project-wrapper">
            <p className="page-about__description">
              <p className="font_bold">Tickets</p> - Сценарий к фильму под рабочим названием «Фредди Меркьюри» писал Питер Морган, автор таких драм, как
              «Королева», «Фрост против Никсона» и «Последний король Шотландии». По версии Моргана, фильм
              о Queen должен был стать реалистичной и довольно мрачной историей фронтмена группы. Более того, идея сценария и тон
              будущего фильма принадлежали самому Коэну, чье внешнее сходство с Меркьюри в Голливуде не оспаривалось.
            </p>
            <p className="page-about__description">
              <p className="font_bold">Tickets</p> - Дэвид Финчер и Том Хупер присматривались к проекту, но, как ни странно, не были одобрены тремя участниками Queen.
            Стивен Фрирз какое-то время прицеливался к режиссерскому креслу, но так и не решился занять его.
            </p>
          </span>
        </div>
    );
  }
});