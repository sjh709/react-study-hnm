import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [sideMenu, setSideMenu] = useState(false);

  const menuList = [
    'Women',
    'Men',
    'Baby',
    'Kids',
    'H&M HOME',
    'Sport',
    'Sale',
    '지속가능성',
  ];

  const moveLoginPage = () => {
    if (authenticate) {
      setAuthenticate(false);
    } else {
      navigate('/login');
    }
  };

  const searchKey = (event) => {
    if (event.key === 'Enter') {
      navigate(`/?q=${keyword}`);
      setKeyword('');
    }
  };

  const searchBtn = () => {
    navigate(`/?q=${keyword}`);
    setKeyword('');
  };

  return (
    <div>
      <div className={`side-menu ${sideMenu === true ? 'open' : ''}`}>
        <button className='close-btn' onClick={() => setSideMenu(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className='side-menu-list'>
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className='nav-header'>
        <div className='burger-menu hide' onClick={() => setSideMenu(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className='login-button' onClick={moveLoginPage}>
          <FontAwesomeIcon icon={faUser} className='icon' />
          <div>{authenticate ? '로그아웃' : '로그인'}</div>
        </div>
      </div>
      <div className='nav-section'>
        <Link to='/'>
          <img
            width={100}
            alt='logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'
          />
        </Link>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href='#'>{menu}</a>
            </li>
          ))}
        </ul>
        <div className='search-box'>
          <button onClick={searchBtn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type='text'
            placeholder='제품검색'
            onChange={(event) => setKeyword(event.target.value)}
            onKeyPress={(event) => searchKey(event)}
            value={keyword}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
