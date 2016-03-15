import React from 'react';

export default React.createClass({
  render(){
    return(
        <div className="page-news-expanded">
            <div className="page-entry__header news-expanded__header">
                <a className="link-element page-entry__link-element" to="/ticket">{'←'}</a>
            </div>

            <div className="content-wrapper">
                <div className="news-expanded-wrapper">
                    <span className="news-expanded__info">
                        Автор: s13, 12 марта 2016 года, 09:28
                    </span>
                    <h1 className="news-expanded__heading">В Свислочском районе школьник украл раритетный мотоцикл</h1>
                    <p>Мотоциклы марки Pannonia производства венгерского завода Csepel выпускались под Будапештом на протяжении
                        почти двадцати лет в 60—70-х годах. Теперь эти двухколесные байки по праву можно считать раритетными, особенно
                        если найти такой в хорошем состоянии.</p>
                </div>
            </div>

            <img className="news-expanded__image" src="http://dummyimage.com/540x140/c7a9c7/fff&text=IMAGE" />

                <div className="content-wrapper">
                    <p>Теперь эти двухколесные байки по праву можно считать раритетными, особенно
                        если найти такой в хорошем состоянии.</p>
                    <p className="news__quote">
                        -I need an easy friend I do whip her into land I don't think you fit this shoe
                        I do, won't you have a clue  I'll take advantage while You hang me out to dry
                        But I can't see you every night Free
                    </p>
                    <p>Теперь эти двухколесные байки по праву можно считать раритетными, особенно
                        если найти такой в хорошем состоянии.</p>
                </div>
        </div>
    );
  }
});