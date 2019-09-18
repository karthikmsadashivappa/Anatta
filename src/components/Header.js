import React from "react";
import { css } from "@emotion/core";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <span
        css={css`
          background-color: #000;
          display: flex;
          justify-content: center;
        `}
      >
        <h3
          className="header-text"
          css={css`
            color: #ffffff;
            font-size: 0.7rem;
          `}
        >
          FREE US SHIPPING & RETURN
        </h3>
      </span>
      <div className="header-wrapper">
        <div className="category">
          <span className="category-name">MEN</span>
          <span className="category-name">WOMEN</span>
        </div>
        <div className="brand-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-items">
          <div className="nav-item">ABOUT</div>
          <div className="nav-item user">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="nav-item cart">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
