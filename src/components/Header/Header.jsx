import React from "react";
import { NavLink } from "react-router-dom";
import HeaderCss from "./Header.module.css";

const Header = () => {
  return (
    <header className={HeaderCss.header}>
      <img
        className={HeaderCss.header__img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
      />
      <div className={HeaderCss.header__list}>
        <ul className={HeaderCss.header__items}>
          <li className={HeaderCss.header__item}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? HeaderCss.active : HeaderCss.header__link
              }>
              Home
            </NavLink>
          </li>
          <li className={HeaderCss.header__item}>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? HeaderCss.active : HeaderCss.header__link
              }>
              Contacts
            </NavLink>
          </li>
          <li className={HeaderCss.header__item}>
            <NavLink
              to="/sign_in"
              className={({ isActive }) =>
                isActive ? HeaderCss.active : HeaderCss.header__link
              }>
              Sign in
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
