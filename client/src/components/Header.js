import React from 'react';
import './Header.css';

const Header = props => (
  <header>
    <h3 style={props.styles}>{props.title}</h3>
    <nav>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <button onClick={props.increase}>Increase</button>
    </nav>
  </header>
);

// const styles = {
//   title: {
//     color: 'red',
//     fontSize: '5rem'
//   }
// }


export default Header;