import React, {Component} from 'react';

export default class Header extends Component {
  render () {
    const spanStyle = {
      color: '#85a878',
      fontSize: '1.2rem',
      textalign: 'center',
      textDecoration: 'underline',
    };

    const headerStyle = {
      background: 'linear-gradient(321deg, rgba(70,115,109,0.20211834733893552) 0%, rgba(195,253,255,1) 100%)',
      padding: '1.4rem',
      boxShadow: '0rem 0.2rem 5.7rem 0.1rem #8ea7a8',
    };

    return (
      <div style={headerStyle}>
        <h1 className="h3">
          MakerList <span style={spanStyle}>Buy Whatever you want</span>
        </h1>
      </div>
    );
  }
}
