import classNames from 'classnames/bind';
import style from './header.module.scss';

const cx = classNames.bind(style);

function Header() {
  return <div><div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
  <div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
  <div class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
  <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div></div>;
}

export default Header;
