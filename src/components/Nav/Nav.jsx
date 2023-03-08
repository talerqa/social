import React from "react";
import { NavLink } from "react-router-dom";
import NavCss from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={NavCss.nav}>
      <ul className={NavCss.list}>
        <li className={NavCss.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
            isActive ? NavCss.active : NavCss.link
          }>
            Profile
          </NavLink>
        </li>
        <li className={NavCss.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) =>
              isActive ? NavCss.active : NavCss.link
            }>
            Message
          </NavLink>
        </li>
        <li className={NavCss.item}>
          <NavLink
            to="/new"
            className={({ isActive }) =>
              isActive ? NavCss.active : NavCss.link
            }>
            News
          </NavLink>
        </li>
        <li className={NavCss.item}>
          <NavLink
            to="/music"
            className={({ isActive }) =>
              isActive ? NavCss.active : NavCss.link
            }>
            Music
          </NavLink>
        </li>
        <li className={NavCss.item}>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? NavCss.active : NavCss.link
            }>
            User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
