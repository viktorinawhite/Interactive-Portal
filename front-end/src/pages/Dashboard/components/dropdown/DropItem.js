import React, { useState } from 'react';
import { FaLastfmSquare } from 'react-icons/fa';
import './Dropdown.css';

function Item(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default Item;
