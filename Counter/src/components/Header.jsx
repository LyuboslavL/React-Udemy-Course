import { Component } from 'react';
import { log } from '../log.js';
import logoImg from '../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <img src={logoImg} alt="Magnifying glass analyzing a document" />
        <h1>React - Behind The Scenes</h1>
      </header>
    );
  }
};

// export default function Header() {
//   log('<Header /> rendered', 1);

//   return (
//     <header id="main-header">
//       <img src={logoImg} alt="Magnifying glass analyzing a document" />
//       <h1>React - Behind The Scenes</h1>
//     </header>
//   );
// }

export default Header;