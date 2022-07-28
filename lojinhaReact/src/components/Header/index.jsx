import * as React from 'react'
import './style.css'

const Header = () => {
  return (
    <header>
      <span className="header-alert">
        <p>20% Off! Code: SPRING21 - Terms apply*</p>
      </span>
      <div className="container">
        <div className="header-account-bar">
          <a href="../index.html">
            <img src="logo-lockup.svg" alt="logo spencer williams fashion" className="logo-spencer" />
          </a>
          <div className="account-items">
            <div className="items-button-with-icon">
              <div className="item-customer-support">
                <img src="suport.svg" alt="icone de suporte, um fone" />
                <p>Support</p>
              </div>
              <div className="item-customer-find">
                <img src="find.svg" alt="icone find a store, icone de mapa" />
                <p>Find a store</p>
              </div>
            </div>
            <div className="items-icon">
              <div className="item-icon-text">
                <img src="like.svg" alt="icone de coração, de curtir" />
                <h3>Stores</h3>
              </div>
              <div className="item-icon-text">
                <img src="login.svg" alt="icone de login" />
                <h3>Account</h3>
              </div>
              <div className="item-icon-text">
                <img src="shopping.svg" alt="icone de compras, carrinho" />
                <h3>Cart</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="nav-menu-mobile">
        <div className="menu-lateral">
          <img src="menu-mobile.svg" alt="menu" />
          <p>MENU</p>
        </div>
        <form action="" className="nav-search-mobile">
          <input type="text" placeholder="Search products, articles" />
          <img src="search.svg" alt="logo de busca, lupa" />
        </form>
      </nav>
      <div className="container">
        <nav className="header-menu-sector">
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
          </ul>
        </nav>
        <div className="header-menu-search">
          <nav className="nav-menu-categories">
            <ul>
              <li>SALE</li>
              <li>NEW IN</li>
              <li>CLOTHING</li>
              <li>SHOES</li>
              <li>ACCESSORIES</li>
              <li>BRANDS</li>
            </ul>
          </nav>
          <div className="search">
            <input type="text" name="search" className="search-form" placeholder="Search products, articles, faq, ..." />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;