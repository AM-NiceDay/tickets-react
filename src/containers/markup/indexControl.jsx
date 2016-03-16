import React from 'react';

export default React.createClass({
  render(){
    return(
      <div className="page-profile">
        <div className="profile-block-wrapper">
          <div className="control-block">
            <div className="user-nav-block">
              <h1 className="control-block__heading">Режим контролера</h1>
              <ul className="control-nav">
                <li className="control-nav__elem">
                  <a className="control-nav__elem-link" href="#">Контроль</a>
                </li>
                <li className="control-nav__elem">
                  <a className="control-nav__elem-link" href="#">Отзыв</a>
                </li>
              </ul>
              <ul className="user-extended-nav">
                <li className="user-extended-nav__elem">
                  <a className="user-extended-nav__elem-link" href="#">О проекте</a>
                </li>
                <li className="user-extended-nav__elem">
                  <a className="user-extended-nav__elem-link" href="#">Правила</a>
                </li>
                <li className="user-extended-nav__elem">
                  <a className="user-extended-nav__elem-link" href="#">Помощь</a>
                </li>
                <li className="user-extended-nav__elem">
                  <a className="user-extended-nav__elem-link" href="#">Выход</a>
                </li>
              </ul>
            </div>
            <span className="social-network-block">
               <a className="social-network__elem" href="#">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M19.54,14.6C21.09,16.04 21.41,16.73 21.46,16.82C22.1,17.88 20.76,17.96 20.76,17.96L18.18,18C18.18,18 17.62,18.11 16.9,17.61C15.93,16.95 15,15.22 14.31,15.45C13.6,15.68 13.62,17.23 13.62,17.23C13.62,17.23 13.62,17.45 13.46,17.62C13.28,17.81 12.93,17.74 12.93,17.74H11.78C11.78,17.74 9.23,18 7,15.67C4.55,13.13 2.39,8.13 2.39,8.13C2.39,8.13 2.27,7.83 2.4,7.66C2.55,7.5 2.97,7.5 2.97,7.5H5.73C5.73,7.5 6,7.5 6.17,7.66C6.32,7.77 6.41,8 6.41,8C6.41,8 6.85,9.11 7.45,10.13C8.6,12.12 9.13,12.55 9.5,12.34C10.1,12.03 9.93,9.53 9.93,9.53C9.93,9.53 9.94,8.62 9.64,8.22C9.41,7.91 8.97,7.81 8.78,7.79C8.62,7.77 8.88,7.41 9.21,7.24C9.71,7 10.58,7 11.62,7C12.43,7 12.66,7.06 12.97,7.13C13.93,7.36 13.6,8.25 13.6,10.37C13.6,11.06 13.5,12 13.97,12.33C14.18,12.47 14.7,12.35 16,10.16C16.6,9.12 17.06,7.89 17.06,7.89C17.06,7.89 17.16,7.68 17.31,7.58C17.47,7.5 17.69,7.5 17.69,7.5H20.59C20.59,7.5 21.47,7.4 21.61,7.79C21.76,8.2 21.28,9.17 20.09,10.74C18.15,13.34 17.93,13.1 19.54,14.6Z" />
                 </svg>
               </a>
               <a className="social-network__elem" href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                </svg>
               </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
});