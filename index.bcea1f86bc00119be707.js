/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

body {
  font-weight: 400;
  font-size: 16px;
  color: #000;
  background: #fff;
  overflow-x: hidden;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

a {
  text-decoration: none;
}

:root {
  --primary-color: #185ee0;
  --secondary-color: #e6eef9a1;
  --dark: #1F2937;
  --white: #FFFFFF;
}

.container {
  display: flex;
  width: 100%;
  flex: 1;
  display: flex;
  width: 100%;
}

.container-header {
  display: flex;
  box-shadow: 1px 0 0 rgb(70, 69, 69);
}

.tabs {
  position: sticky;
  top: 0;
  height: 340px;
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 2rem 1rem;
}
.tabs * {
  z-index: 2;
}

input[type=radio] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 16px;
  height: 54px;
  width: 200px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
}

.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  width: 1.5rem;
  height: 2rem;
  margin-right: 0.75rem;
  border-radius: 50%;
  transition: 0.15s ease-in;
}

input[type=radio]:checked + label {
  color: var(--primary-color);
}
input[type=radio]:checked + label > .notification {
  background-color: var(--primary-color);
  color: #fff;
}

input[id=radio-1]:checked ~ .glider {
  transform: translateY(0);
}

input[id=radio-2]:checked ~ .glider {
  transform: translateY(100%);
}

input[id=radio-3]:checked ~ .glider {
  transform: translateY(200%);
}

input[id=radio-4]:checked ~ .glider {
  transform: translateY(300%);
}

input[id=radio-5]:checked ~ .glider {
  transform: translateY(400%);
}

.glider {
  position: absolute;
  display: flex;
  height: 54px;
  width: 200px;
  background-color: var(--secondary-color);
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}

.menu-items {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.menu-items input[type=radio] {
  display: none;
}
.menu-items .mobile-tab {
  display: flex;
  align-items: center;
  height: 54px;
  width: 100%;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
  padding: 0 1rem;
}
.menu-items .mobile-notification {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  width: 1.5rem;
  height: 2rem;
  margin-right: 0.75rem;
  border-radius: 50%;
  transition: 0.15s ease-in;
}
.menu-items input[type=radio]:checked + label {
  color: var(--primary-color);
}
.menu-items input[type=radio]:checked + label > .mobile-notification {
  background-color: var(--primary-color);
  color: #fff;
}
.menu-items input[id=mobile-radio-1]:checked ~ .mobile-glider {
  transform: translateY(0);
}
.menu-items input[id=mobile-radio-2]:checked ~ .mobile-glider {
  transform: translateY(100%);
}
.menu-items input[id=mobile-radio-3]:checked ~ .mobile-glider {
  transform: translateY(200%);
}
.menu-items input[id=mobile-radio-4]:checked ~ .mobile-glider {
  transform: translateY(300%);
}
.menu-items input[id=mobile-radio-5]:checked ~ .mobile-glider {
  transform: translateY(400%);
}
.menu-items .mobile-glider {
  position: absolute;
  height: 54px;
  width: 80%;
  background-color: var(--secondary-color);
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}

.contact {
  display: flex;
  justify-content: space-between;
  gap: 64px;
  margin-bottom: 32px;
  align-items: center;
}

.input-search {
  width: 78%;
}

.icons {
  display: flex;
  align-items: center;
  gap: 32px;
}

.icon a i {
  font-size: 32px;
  color: black;
  background: var(--white);
  padding: 8px;
  border-radius: 60px;
  transition: 0.3s;
}

.icon a i:hover {
  background: var(--secondary-color);
  color: var(--primary-color);
}

.input-search input[type=text] {
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

.input-search input[type=text]:focus {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}

.menu {
  display: none;
}

.bg-header {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

main {
  padding: 2rem 1.5rem;
  width: 100%;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 8rem;
}

.product-card {
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  border-top: 4px solid dodgerBlue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.product-card:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1) !important;
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dark);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.product-description {
  color: var(--text-gray);
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.buy-button {
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy-button:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

.footer {
  padding: 2rem;
  color: var(--dark);
  box-shadow: 0 -1px 0 0 rgb(70, 69, 69);
  z-index: 2;
}

.navbar {
  width: 100%;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
}

.navbar .menu-items {
  display: flex;
}

.navbar .nav-container li {
  list-style: none;
}

.navbar .nav-container a {
  text-decoration: none;
  color: #0e2431;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.7rem;
}

.navbar .nav-container a:hover {
  font-weight: bolder;
}

.nav-container {
  display: block;
  position: relative;
  height: 60px;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #0e2431;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.navbar .menu-items {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 120px;
  background: var(--white);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  height: 100vh;
  transform: translateX(-100%);
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding-left: 50px;
  transition: transform 0.5s ease-in-out;
  animation: menuIn 3s;
  text-align: center;
  overflow-y: auto;
}

.navbar .menu-items li {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
}

.nav-container input[type=checkbox]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type=checkbox]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type=checkbox]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type=checkbox]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type=checkbox]:checked ~ .logo {
  display: none;
}

.cart-count {
  position: absolute;
  top: 25px;
  right: 100px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
}

.cart-modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  justify-content: flex-end;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: flex;
  animation: menuIn 3s;
}
.cart-modal.active {
  opacity: 1;
  visibility: visible;
}

.cart-content {
  background-color: white;
  width: 100%;
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}
.cart-modal.active .cart-content {
  transform: translateX(0);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}
.cart-header h2 {
  margin: 0;
  font-size: 1.5rem;
}
.cart-header .close-cart {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
}
.cart-header .close-cart:hover {
  color: #000;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
}
.cart-item .cart-item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
}
.cart-item .cart-item-details {
  flex: 1;
}
.cart-item .cart-item-details h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.cart-item .cart-item-details .cart-item-price {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.9rem;
}
.cart-item .cart-item-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.cart-item .cart-item-controls .quantity-btn {
  background: none;
  border: 1px solid #ddd;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-item .cart-item-controls .quantity-btn:hover {
  background-color: #eee;
}
.cart-item .cart-item-controls .quantity-display {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
}
.cart-item .cart-item-controls .remove-btn {
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  padding: 0.25rem;
  margin-left: 0.5rem;
}
.cart-item .cart-item-controls .remove-btn:hover {
  color: #cc0000;
}

.empty-cart-message {
  text-align: center;
  color: #666;
  padding: 2rem;
  font-style: italic;
}

.cart-footer {
  padding: 1.5rem;
  border-top: 1px solid #eee;
}
.cart-footer .cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}
.cart-footer .cart-total span {
  color: var(--primary-color);
}
.cart-footer .order-button {
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cart-notification {
  position: fixed;
  top: 100px;
  right: 20px;
  background-color: #4CAF50;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  transform: translateX(150%);
  transition: transform 0.3s ease;
  animation: menuIn 3s;
}
.cart-notification.show {
  transform: translateX(0);
}

@media (max-width: 1023px) {
  .container-header {
    display: none;
  }
  .menu {
    display: block;
  }
  .contact {
    position: fixed;
    width: 95%;
    background: var(--white);
    z-index: 3;
  }
  main {
    padding: 0 1.5rem;
  }
  .product-grid {
    padding-top: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
  .tabs {
    width: auto;
  }
  .nav-container {
    background: var(--white);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1001;
  }
  .product-card:hover {
    transform: none;
  }
  .cart-count {
    top: 0;
    right: 75px;
  }
}
@media (max-width: 639px) {
  .product-grid {
    grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  }
  .contact {
    width: 100%;
    left: 0px;
    gap: 0;
  }
  .navbar .menu-items {
    width: 100%;
  }
  .nav-container input[type=checkbox]:checked ~ .menu-items {
    overflow: hidden;
  }
  body.menu-open {
    overflow: hidden;
    height: 100vh;
    width: 100%;
  }
  .input-search {
    margin-left: 64px;
  }
}
.product-grid .product-card {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeIn 1s ease forwards;
  animation-delay: 1s;
  animation-fill-mode: both;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-grid .product-card:nth-child(1) {
  animation-delay: 0.1s;
}
.product-grid .product-card:nth-child(2) {
  animation-delay: 0.2s;
}
.product-grid .product-card:nth-child(3) {
  animation-delay: 0.3s;
}
.product-grid .product-card:nth-child(4) {
  animation-delay: 0.4s;
}
.product-grid .product-card:nth-child(5) {
  animation-delay: 0.5s;
}
.product-grid .product-card:nth-child(6) {
  animation-delay: 0.6s;
}
.product-grid .product-card:nth-child(7) {
  animation-delay: 0.7s;
}
.product-grid .product-card:nth-child(8) {
  animation-delay: 0.8s;
}
.product-grid .product-card:nth-child(9) {
  animation-delay: 0.9s;
}
.product-grid .product-card:nth-child(10) {
  animation-delay: 1s;
}
.product-grid .product-card:nth-child(11) {
  animation-delay: 1.1s;
}
.product-grid .product-card:nth-child(12) {
  animation-delay: 1.2s;
}
.product-grid .product-card:nth-child(13) {
  animation-delay: 1.3s;
}
.product-grid .product-card:nth-child(14) {
  animation-delay: 1.4s;
}
.product-grid .product-card:nth-child(15) {
  animation-delay: 1.5s;
}
.product-grid .product-card:nth-child(16) {
  animation-delay: 1.6s;
}
.product-grid .product-card:nth-child(17) {
  animation-delay: 1.7s;
}
.product-grid .product-card:nth-child(18) {
  animation-delay: 1.8s;
}
.product-grid .product-card:nth-child(19) {
  animation-delay: 1.9s;
}
.product-grid .product-card:nth-child(20) {
  animation-delay: 2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes menuIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\");\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody{\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  color: #000;\r\n  background: #fff;\r\n  overflow-x: hidden;\r\n  font-family: 'Inter', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n}\r\n\r\n:root {\r\n\t--primary-color: #185ee0;\r\n\t--secondary-color: #e6eef9a1;\r\n  --dark: #1F2937;   \r\n  --white: #FFFFFF;         \r\n}\r\n\r\n.container{\r\n  display: flex;\r\n  width: 100%;\r\n  flex: 1;\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.container-header {\r\n  display: flex;\r\n  box-shadow: 1px 0 0 rgb(70, 69, 69);\r\n}\r\n.tabs {\r\n  position: sticky;\r\n  top: 0;\r\n  height: 340px;\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  padding: 2rem 1rem;\r\n\t* {\r\n\t\tz-index: 2;\r\n\t}\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n\tdisplay: none;\r\n}\r\n\r\n.tab {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-start;\r\n    margin-left: 16px;\r\n\theight: 54px;\r\n\twidth: 200px;\r\n\tfont-size: 1.25rem;\r\n\tfont-weight: 500;\r\n\tborder-radius: 99px;\r\n\tcursor: pointer;\r\n\ttransition: color 0.15s ease-in;\r\n}\r\n\r\n.notification {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n    padding: 2px 5px;\r\n\twidth: 1.5rem;\r\n\theight: 2rem;\r\n\tmargin-right: 0.75rem;\r\n\tborder-radius: 50%;\r\n\ttransition: 0.15s ease-in;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n\t&:checked {\r\n\t\t& + label {\r\n\t\t\tcolor: var(--primary-color);\r\n\t\t\t& > .notification {\r\n\t\t\t\tbackground-color: var(--primary-color);\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\ninput[id=\"radio-1\"] {\r\n\t&:checked {\r\n\t\t& ~ .glider {\r\n\t\t\ttransform: translateY(0);\r\n\t\t}\r\n\t}\r\n}\r\n\r\ninput[id=\"radio-2\"] {\r\n\t&:checked {\r\n\t\t& ~ .glider {\r\n\t\t\ttransform: translateY(100%);\r\n\t\t}\r\n\t}\r\n}\r\n\r\ninput[id=\"radio-3\"] {\r\n\t&:checked {\r\n\t\t& ~ .glider {\r\n\t\t\ttransform: translateY(200%);\r\n\t\t}\r\n\t}\r\n}\r\n\r\ninput[id=\"radio-4\"] {\r\n\t&:checked {\r\n\t\t& ~ .glider {\r\n\t\t\ttransform: translateY(300%);\r\n\t\t}\r\n\t}\r\n}\r\ninput[id=\"radio-5\"] {\r\n\t&:checked {\r\n\t\t& ~ .glider {\r\n\t\t\ttransform: translateY(400%);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.glider {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\theight: 54px;\r\n\twidth: 200px;\r\n\tbackground-color: var(--secondary-color);\r\n\tz-index: 1;\r\n\tborder-radius: 99px; \r\n\ttransition: 0.25s ease-out;\r\n}\r\n\r\n.menu-items {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  \r\n  input[type=\"radio\"] {\r\n    display: none;\r\n  }\r\n\r\n  .mobile-tab {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 54px;\r\n    width: 100%;\r\n    font-size: 1.25rem;\r\n    font-weight: 500;\r\n    border-radius: 99px;\r\n    cursor: pointer;\r\n    transition: color 0.15s ease-in;\r\n    padding: 0 1rem;\r\n  }\r\n\r\n  .mobile-notification {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\t  padding: 2px 5px;\r\n    width: 1.5rem;\r\n    height: 2rem;\r\n    margin-right: 0.75rem;\r\n    border-radius: 50%;\r\n    transition: 0.15s ease-in;\r\n  }\r\n\r\n  input[type=\"radio\"] {\r\n    &:checked {\r\n      & + label {\r\n        color: var(--primary-color);\r\n        & > .mobile-notification {\r\n          background-color: var(--primary-color);\r\n          color: #fff;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  input[id=\"mobile-radio-1\"] {\r\n    &:checked {\r\n      & ~ .mobile-glider {\r\n        transform: translateY(0);\r\n      }\r\n    }\r\n  }\r\n\r\n  input[id=\"mobile-radio-2\"] {\r\n    &:checked {\r\n      & ~ .mobile-glider {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  }\r\n\r\n  input[id=\"mobile-radio-3\"] {\r\n    &:checked {\r\n      & ~ .mobile-glider {\r\n        transform: translateY(200%);\r\n      }\r\n    }\r\n  }\r\n\r\n  input[id=\"mobile-radio-4\"] {\r\n    &:checked {\r\n      & ~ .mobile-glider {\r\n        transform: translateY(300%);\r\n      }\r\n    }\r\n  }\r\n\r\n  input[id=\"mobile-radio-5\"] {\r\n    &:checked {\r\n      & ~ .mobile-glider {\r\n        transform: translateY(400%);\r\n      }\r\n    }\r\n  }\r\n\r\n  .mobile-glider {\r\n    position: absolute;\r\n    height: 54px;\r\n    width: 80%;\r\n    background-color: var(--secondary-color);\r\n    z-index: 1;\r\n    border-radius: 99px;\r\n    transition: 0.25s ease-out;\r\n  }\r\n}\r\n\r\n.contact{\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tgap: 64px;\r\n\tmargin-bottom: 32px;\r\n\talign-items: center;\r\n}\r\n\r\n.input-search{\r\n\twidth: 78%;\r\n}\r\n\r\n.icons{\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 32px;\r\n}\r\n\r\n.icon a i{\r\n\tfont-size: 32px;\r\n\tcolor: black;\r\n\tbackground: var(--white);\r\n\tpadding: 8px;\r\n\tborder-radius: 60px;\r\n\ttransition:.3s;\r\n}\r\n\r\n.icon a i:hover{\r\n\tbackground: var(--secondary-color);\r\n\tcolor: var(--primary-color);\r\n}\r\n\r\n.input-search input[type=text]{\r\n    width:100%;\r\n    border:2px solid #aaa;\r\n    border-radius:4px;\r\n    margin:8px 0;\r\n    outline:none;\r\n    padding:8px;\r\n    box-sizing:border-box;\r\n    transition:.3s;\r\n  }\r\n  \r\n.input-search input[type=text]:focus{\r\n    border-color:dodgerBlue;\r\n    box-shadow:0 0 8px 0 dodgerBlue;\r\n  }\r\n  \r\n\r\n.menu{\r\n\tdisplay: none;\r\n}\r\n\r\n.bg-header{\r\n\tbox-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\nmain{\r\n\tpadding: 2rem 1.5rem;\r\n\twidth: 100%;\r\n}\r\n\r\n.product-grid {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r\n\tgap: 1.5rem;\r\n\tmargin-bottom: 8rem;\r\n}\r\n\r\n.product-card {\r\n\tbackground-color: var(--white);\r\n\tborder-radius: 8px;\r\n\tpadding: 1.5rem;\r\n\tbox-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\r\n\ttransition: transform 0.3s, box-shadow 0.3s;\r\n\tcursor: pointer;\r\n\tborder-top: 4px solid dodgerBlue;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n.product-card:hover {\r\n\ttransform: translateY(-5px) !important;\r\n\tbox-shadow: 0 10px 15px rgba(0, 0, 0, 0.1) !important;\r\n}\r\n\r\n.product-image {\r\n\twidth: 100%;\r\n\theight: 200px;\r\n\toverflow: hidden;\r\n\tborder-radius: 6px;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.product-image img {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tobject-fit: cover;\r\n}\r\n\r\n.product-card h3 {\r\n\tmargin-bottom: 0.5rem;\r\n\tfont-size: 1.25rem;\r\n\tfont-weight: 600;\r\n\tcolor: var(--dark);\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-line-clamp: 2;\r\n\tline-clamp: 2;\r\n}\r\n\r\n.product-description {\r\n\tcolor: var(--text-gray);\r\n\tmargin-bottom: 1rem;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-line-clamp: 2;\r\n\tline-clamp: 2;\r\n}\r\n\r\n.product-price {\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: 600;\r\n\tcolor: var(--primary-color);\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.buy-button {\r\n\tbackground-color: var(--primary-color);\r\n\tcolor: var(--white);\r\n\tborder: none;\r\n\tpadding: 0.75rem 1.5rem;\r\n\tborder-radius: 6px;\r\n\tfont-size: 1rem;\r\n\tfont-weight: 500;\r\n\tcursor: pointer;\r\n\ttransition: background-color 0.3s;\r\n}\r\n\r\n.buy-button:hover {\r\n\tbackground-color: var(--secondary-color);\r\n\tcolor: var(--primary-color);\r\n}\r\n\r\n.footer {\r\n\tpadding: 2rem;\r\n\tcolor: var(--dark);\r\n\tbox-shadow: 0 -1px 0 0 rgb(70, 69, 69);\r\n\tz-index: 2;\r\n}\r\n\r\n.navbar {\r\n  width: 100%;\r\n}\r\n\r\n.nav-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 62px;\r\n}\r\n\r\n.navbar .menu-items {\r\n  display: flex;\r\n}\r\n\r\n.navbar .nav-container li {\r\n  list-style: none;\r\n}\r\n\r\n.navbar .nav-container a {\r\n  text-decoration: none;\r\n  color: #0e2431;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  padding: 0.7rem;\r\n}\r\n\r\n.navbar .nav-container a:hover{\r\n    font-weight: bolder;\r\n}\r\n\r\n.nav-container {\r\n  display: block;\r\n  position: relative;\r\n  height: 60px;\r\n}\r\n\r\n.nav-container .checkbox {\r\n  position: absolute;\r\n  display: block;\r\n  height: 32px;\r\n  width: 32px;\r\n  top: 20px;\r\n  left: 20px;\r\n  z-index: 5;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-container .hamburger-lines {\r\n  display: block;\r\n  height: 26px;\r\n  width: 32px;\r\n  position: absolute;\r\n  top: 17px;\r\n  left: 20px;\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.nav-container .hamburger-lines .line {\r\n  display: block;\r\n  height: 4px;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  background: #0e2431;\r\n}\r\n\r\n.nav-container .hamburger-lines .line1 {\r\n  transform-origin: 0% 0%;\r\n  transition: transform 0.4s ease-in-out;\r\n}\r\n\r\n.nav-container .hamburger-lines .line2 {\r\n  transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.nav-container .hamburger-lines .line3 {\r\n  transform-origin: 0% 100%;\r\n  transition: transform 0.4s ease-in-out;\r\n}\r\n\r\n.navbar .menu-items {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  padding-top: 120px;\r\n  background: var(--white);\r\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);\r\n  height: 100vh;\r\n  transform: translateX(-100%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 0;\r\n  padding-left: 50px;\r\n  transition: transform 0.5s ease-in-out;\r\n  animation: menuIn 3s;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.navbar .menu-items li {\r\n  margin-bottom: 1.2rem;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.nav-container input[type=\"checkbox\"]:checked ~ .menu-items {\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-container input[type=\"checkbox\"]:checked ~ .hamburger-lines .line1 {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.nav-container input[type=\"checkbox\"]:checked ~ .hamburger-lines .line2 {\r\n  transform: scaleY(0);\r\n}\r\n\r\n.nav-container input[type=\"checkbox\"]:checked ~ .hamburger-lines .line3 {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.nav-container input[type=\"checkbox\"]:checked ~ .logo{\r\n  display: none;\r\n}\r\n\r\n.cart-count {\r\n  position: absolute;\r\n  top: 25px;\r\n  right: 100px;\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.cart-modal {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1000;\r\n  justify-content: flex-end;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: opacity 0.3s ease, visibility 0.3s ease;\r\n  display: flex;\r\n  animation: menuIn 3s;\r\n  \r\n  &.active {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n.cart-content {\r\n  background-color: white;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transform: translateX(100%);\r\n  transition: transform 0.3s ease;\r\n  \r\n  .cart-modal.active & {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.cart-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1.5rem;\r\n  border-bottom: 1px solid #eee;\r\n  \r\n  h2 {\r\n    margin: 0;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .close-cart {\r\n    background: none;\r\n    border: none;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n    color: #666;\r\n    \r\n    &:hover {\r\n      color: #000;\r\n    }\r\n  }\r\n}\r\n\r\n.cart-items {\r\n  flex: 1;\r\n  overflow-y: auto;\r\n  padding: 1rem;\r\n}\r\n\r\n.cart-item {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  border: 1px solid #eee;\r\n  border-radius: 8px;\r\n  margin-bottom: 1rem;\r\n  background-color: #f9f9f9;\r\n  \r\n  .cart-item-image {\r\n    width: 60px;\r\n    height: 60px;\r\n    object-fit: cover;\r\n    border-radius: 4px;\r\n    margin-right: 1rem;\r\n  }\r\n  \r\n  .cart-item-details {\r\n    flex: 1;\r\n    \r\n    h4 {\r\n      margin: 0 0 0.5rem 0;\r\n      font-size: 0.9rem;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis;\r\n      display: -webkit-box;\r\n      -webkit-box-orient: vertical;\r\n    }\r\n    \r\n    .cart-item-price {\r\n      color: var(--primary-color);\r\n      font-weight: 600;\r\n      font-size: 0.9rem;\r\n    }\r\n  }\r\n  \r\n  .cart-item-controls {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    \r\n    .quantity-btn {\r\n      background: none;\r\n      border: 1px solid #ddd;\r\n      width: 30px;\r\n      height: 30px;\r\n      border-radius: 4px;\r\n      cursor: pointer;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      \r\n      &:hover {\r\n        background-color: #eee;\r\n      }\r\n    }\r\n    \r\n    .quantity-display {\r\n      min-width: 30px;\r\n      text-align: center;\r\n      font-weight: 600;\r\n    }\r\n    \r\n    .remove-btn {\r\n      background: none;\r\n      border: none;\r\n      color: #ff4444;\r\n      cursor: pointer;\r\n      padding: 0.25rem;\r\n      margin-left: 0.5rem;\r\n      \r\n      &:hover {\r\n        color: #cc0000;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.empty-cart-message {\r\n  text-align: center;\r\n  color: #666;\r\n  padding: 2rem;\r\n  font-style: italic;\r\n}\r\n\r\n.cart-footer {\r\n  padding: 1.5rem;\r\n  border-top: 1px solid #eee;\r\n  \r\n  .cart-total {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    \r\n    span {\r\n      color: var(--primary-color);\r\n    }\r\n  }\r\n  \r\n  .order-button {\r\n    width: 100%;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    border: none;\r\n    padding: 1rem;\r\n    border-radius: 6px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n  }\r\n}\r\n\r\n.cart-notification {\r\n  position: fixed;\r\n  top: 100px;\r\n  right: 20px;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 1rem 1.5rem;\r\n  border-radius: 4px;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r\n  z-index: 1001;\r\n  transform: translateX(150%);\r\n  transition: transform 0.3s ease;\r\n  animation: menuIn 3s;\r\n  \r\n  &.show {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@media (max-width: 1023px){\r\n    .container-header{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.menu{\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.contact{\r\n\t\tposition: fixed;\r\n\t\twidth: min(100%, 95%);\r\n\t\tbackground: var(--white);\r\n\t\tz-index: 3;\r\n\t}\r\n\r\n\tmain{\r\n\t\tpadding: 0 1.5rem;\r\n\t}\r\n\r\n\t.product-grid{\r\n\t\tpadding-top: 5rem;\r\n\t\tgrid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n\t}\r\n\r\n\t.tabs{\r\n\t\twidth: auto;\r\n\t}\r\n\t.nav-container{\r\n\t\tbackground: var(--white);\r\n\t\tbox-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n\t\tz-index: 1001;\r\n\t}\r\n\t.product-card:hover {\r\n\t\ttransform: none;\r\n\t}\r\n  .cart-count{\r\n    top: 0;\r\n    right: 75px;\r\n  }\r\n}\r\n\r\n@media (max-width: 639px){\r\n\t.product-grid{\r\n\t\tgrid-template-columns: repeat(auto-fit, minmax(185px, 1fr));\r\n\t}\r\n\t.contact{\r\n\t\twidth: 100%;\r\n    left: 0px;\r\n    gap: 0;\r\n\t}\r\n\t.navbar .menu-items{\r\n\t\twidth: 100%;\t\r\n\t}\r\n\t\r\n\t.nav-container input[type=\"checkbox\"]:checked ~ .menu-items {\r\n\t\toverflow: hidden;\r\n\t}\r\n\t\r\n\tbody.menu-open {\r\n\t\toverflow: hidden; \r\n\t\theight: 100vh; \r\n\t\twidth: 100%; \r\n\t}\r\n\r\n  .input-search{\r\n    margin-left: 64px;\r\n  }\r\n}\r\n\r\n// Анимация появления карточек товара\r\n.product-grid {\r\n  .product-card {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n    animation: fadeIn 1s ease forwards;\r\n    animation-delay: 1s;\r\n    animation-fill-mode: both;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n\r\n    @for $i from 1 through 20 {\r\n      &:nth-child(#{$i}) {\r\n        animation-delay: #{$i * 0.1}s;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes menuIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/AirPods.jpg":
/*!*****************************!*\
  !*** ./src/img/AirPods.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/AirPods.jpg";

/***/ }),

/***/ "./src/img/AppleAirPodsMax.jpg":
/*!*************************************!*\
  !*** ./src/img/AppleAirPodsMax.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/AppleAirPodsMax.jpg";

/***/ }),

/***/ "./src/img/AppleWatchSeries.jpg":
/*!**************************************!*\
  !*** ./src/img/AppleWatchSeries.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/AppleWatchSeries.jpg";

/***/ }),

/***/ "./src/img/MacBook.jpg":
/*!*****************************!*\
  !*** ./src/img/MacBook.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/MacBook.jpg";

/***/ }),

/***/ "./src/img/MetaQuest.jpg":
/*!*******************************!*\
  !*** ./src/img/MetaQuest.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/MetaQuest.jpg";

/***/ }),

/***/ "./src/img/NintendoSwitchOLED.jpg":
/*!****************************************!*\
  !*** ./src/img/NintendoSwitchOLED.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/NintendoSwitchOLED.jpg";

/***/ }),

/***/ "./src/img/Playstation.jpg":
/*!*********************************!*\
  !*** ./src/img/Playstation.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Playstation.jpg";

/***/ }),

/***/ "./src/img/RTX.jpg":
/*!*************************!*\
  !*** ./src/img/RTX.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/RTX.jpg";

/***/ }),

/***/ "./src/img/iPadPro(M4).jpg":
/*!*********************************!*\
  !*** ./src/img/iPadPro(M4).jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/iPadPro(M4).jpg";

/***/ }),

/***/ "./src/img/telefone.jpg":
/*!******************************!*\
  !*** ./src/img/telefone.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/telefone.jpg";

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./style.scss */ "./src/style.scss?ebcd"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/svg/house.svg */ "./src/svg/house.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/svg/catalog.svg */ "./src/svg/catalog.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/svg/percent.svg */ "./src/svg/percent.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/svg/truck-speed.svg */ "./src/svg/truck-speed.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/svg/contact.svg */ "./src/svg/contact.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/telefone.jpg */ "./src/img/telefone.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/MacBook.jpg */ "./src/img/MacBook.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/AirPods.jpg */ "./src/img/AirPods.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/img/Playstation.jpg */ "./src/img/Playstation.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/img/RTX.jpg */ "./src/img/RTX.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/img/iPadPro(M4).jpg */ "./src/img/iPadPro(M4).jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/img/AppleWatchSeries.jpg */ "./src/img/AppleWatchSeries.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/img/MetaQuest.jpg */ "./src/img/MetaQuest.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/img/AppleAirPodsMax.jpg */ "./src/img/AppleAirPodsMax.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/img/NintendoSwitchOLED.jpg */ "./src/img/NintendoSwitchOLED.jpg"), __webpack_require__.b);
// Module
var code = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FrameMarket</title>
    <link rel="stylesheet" href="${___HTML_LOADER_IMPORT_0___}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <div class="container">
        <header class="container-header">
            <div class="tabs">
                <input type="radio" id="radio-1" name="tabs" checked />
                <label class="tab" for="radio-1"><img class="notification" src="${___HTML_LOADER_IMPORT_1___}" alt="">Главная</label>
                <input type="radio" id="radio-2" name="tabs" />
                <label class="tab" for="radio-2"><img class="notification" src="${___HTML_LOADER_IMPORT_2___}" alt=""></span>Каталог</label>
                <input type="radio" id="radio-3" name="tabs" />
                <label class="tab" for="radio-3"><img class="notification" src="${___HTML_LOADER_IMPORT_3___}" alt="">Акции</label>
                <input type="radio" id="radio-4" name="tabs" />
                <label class="tab" for="radio-4"><img class="notification" src="${___HTML_LOADER_IMPORT_4___}" alt="">Доставка</label>
                <input type="radio" id="radio-5" name="tabs" />
                <label class="tab" for="radio-5"><img class="notification" src="${___HTML_LOADER_IMPORT_5___}" alt="">Контакты</label>
                <span class="glider"></span>
            </div> 
        </header>
        <main>
            <header class="contact" id="header">
                <div class="menu">
                    <div class="navbar">
                        <div class="container nav-container">
                            <input class="checkbox" type="checkbox" name="" id="menu-toggle" />
                            <div class="hamburger-lines">
                                <span class="line line1"></span>
                                <span class="line line2"></span>
                                <span class="line line3"></span>
                            </div>  
                            <div class="menu-overlay"></div>
                            <div class="menu-items">
                                <div class="tabs">
                                    <input type="radio" id="mobile-radio-1" name="mobile-tabs" checked />
                                    <label class="mobile-tab" for="mobile-radio-1"><img class="mobile-notification" src="${___HTML_LOADER_IMPORT_1___}" alt="">Главная</label>
                                    <input type="radio" id="mobile-radio-2" name="mobile-tabs" />
                                    <label class="mobile-tab" for="mobile-radio-2"><img class="mobile-notification" src="${___HTML_LOADER_IMPORT_2___}" alt=""></span>Каталог</label>
                                    <input type="radio" id="mobile-radio-3" name="mobile-tabs" />
                                    <label class="mobile-tab" for="mobile-radio-3"><img class="mobile-notification" src="${___HTML_LOADER_IMPORT_3___}" alt="">Акции</label>
                                    <input type="radio" id="mobile-radio-4" name="mobile-tabs" />
                                    <label class="mobile-tab" for="mobile-radio-4"><img class="mobile-notification" src="${___HTML_LOADER_IMPORT_4___}" alt="">Доставка</label>
                                    <input type="radio" id="mobile-radio-5" name="mobile-tabs" />
                                    <label class="mobile-tab" for="mobile-radio-5"><img class="mobile-notification" src="${___HTML_LOADER_IMPORT_5___}" alt="">Контакты</label>
                                    <span class="mobile-glider"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="input-search">
                    <input type="text" placeholder="Поиск">
                </div>
                <div class="icons">
                    <div class="icon">
                        <a href="#" id="cartIcon"><i class='bx bx-cart'></i></a>                            
                    </div>
                    <div class="icon">
                        <a href="#"><i class='bx bx-user'></i></a>
                    </div>
                </div>
            </header>
            <div class="product-grid">
                <div class="product-card">
                    <div class="product-image">
                        <img src="${___HTML_LOADER_IMPORT_6___}" alt="Смартфон iPhone 15">
                    </div>
                    <h3>iPhone 15 Pro</h3>
                    <p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequuntur, ipsam enim unde eum fuga ad beatae praesentium iure quis necessitatibus nemo magni maiores corporis maxime? Exercitationem error magni omnis!</p>
                    <div class="product-price">89 990 ₽</div>
                    <button class="buy-button">Купить</button>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="${___HTML_LOADER_IMPORT_7___}" alt="Ноутбук MacBook Air">
                    </div>
                    <h3>MacBook Air M2</h3>
                    <p class="product-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolor, quaerat impedit provident eaque tenetur harum autem cum asperiores possimus ipsam quasi non, incidunt ea culpa maiores, fuga doloremque. Exercitationem.</p>
                    <div class="product-price">119 990 ₽</div>
                    <button class="buy-button">Купить</button>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="${___HTML_LOADER_IMPORT_8___}" alt="Наушники AirPods Pro">
                    </div>
                    <h3>AirPods Pro 2</h3>
                    <p class="product-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nobis sit qui tenetur excepturi assumenda dolor temporibus delectus minima magni at veniam placeat eius voluptas, consequatur repudiandae fugiat amet ipsa.</p>
                    <div class="product-price">24 990 ₽</div>
                    <button class="buy-button">Купить</button>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="${___HTML_LOADER_IMPORT_9___}" alt="Игровая консоль PlayStation 5">
                    </div>
                    <h3>PlayStation 5</h3>
                    <p class="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eum exercitationem porro illo tenetur quia explicabo cumque quis iusto! Doloremque amet quaerat nesciunt cum iusto. Similique dicta cum laboriosam veniam.</p>
                    <div class="product-price">54 990 ₽</div>
                    <button class="buy-button">Купить</button>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="${___HTML_LOADER_IMPORT_10___}" alt="Видеокарта RTX 4090">
                    </div>
                    <h3>RTX 4090</h3>
                    <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id accusantium, eius quia earum numquam iste cumque nam, distinctio sed blanditiis natus velit alias voluptate magni maiores! Optio, rem. Provident, nobis?</p>
                    <div class="product-price">159 990 ₽</div>
                    <button class="buy-button">Купить</button>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="${___HTML_LOADER_IMPORT_11___}" alt="iPad Pro (M4)">
                    </div>
                    <h3>iPad Pro (M4)</h3>
                    <p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deserunt quaerat fugiat dolorem quis itaque nostrum sed distinctio earum, illum voluptas, ducimus mollitia. Porro, ad. Iusto dolorem repudiandae velit non.</p>
                    <div class="product-price">103 490 ₽</div>
                    <button class="buy-button">Купить</button>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="${___HTML_LOADER_IMPORT_12___}" alt="Apple Watch Series 9">
                    </div>
                    <h3>Apple Watch Series 9</h3>
                    <p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum, non et modi labore eum reiciendis quam molestiae itaque nulla, aliquid natus molestias quasi accusamus ullam cumque quas, impedit temporibus?</p>
                    <div class="product-price">32 990 ₽</div>
                    <button class="buy-button">Купить</button>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="${___HTML_LOADER_IMPORT_13___}" alt="Meta Quest 3">
                    </div>
                    <h3>Meta Quest 3</h3>
                    <p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus facilis assumenda inventore voluptates? Quis, ab! Nesciunt numquam quisquam laborum, blanditiis voluptates asperiores dolores aut officiis perferendis a ullam porro.</p>
                    <div class="product-price">62 426 ₽</div>
                    <button class="buy-button">Купить</button>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="${___HTML_LOADER_IMPORT_14___}" alt="Apple AirPods Max">
                    </div>
                    <h3>Apple AirPods Max</h3>
                    <p class="product-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor qui illum explicabo accusamus soluta eveniet adipisci, minima tempore! Doloremque, provident? Sequi architecto dolore, doloribus harum molestiae velit excepturi. Repellendus.</p>
                    <div class="product-price">46 990 ₽</div>
                    <button class="buy-button">Купить</button>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="${___HTML_LOADER_IMPORT_15___}" alt="Nintendo Switch OLED">
                    </div>
                    <h3>Nintendo Switch OLED</h3>
                    <p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nobis nemo blanditiis fugit voluptatum. Iste, officiis quo. Quasi commodi suscipit autem? Deleniti mollitia quia laborum iusto. Pariatur odio temporibus doloremque!</p>
                    <div class="product-price">15 490 ₽</div>
                    <button class="buy-button">Купить</button>
                </div>
            </div>
        </main>
        <!-- Корзина -->
<div class="cart-modal" id="cartModal">
  <div class="cart-content">
    <div class="cart-header">
      <h2>Корзина</h2>
      <button class="close-cart">&times;</button>
    </div>
    <div class="cart-items" id="cartItems">
      <!-- Товары будут добавляться сюда динамически -->
      <div class="empty-cart-message" id="emptyCartMessage">
        Корзина пуста
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-total">
        Итого: <span id="cartTotal">0 ₽</span>
      </div>
      <button class="order-button" id="orderButton">Оформить заказ</button>
    </div>
  </div>
</div>

<!-- Уведомление о добавлении в корзину -->
<div class="cart-notification" id="cartNotification">
  Товар добавлен в корзину!
</div>
    </div>
     <footer class="footer">
            <h2>What is Lorem Ipsum?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop  publishing 
                software like Aldus 
                PageMaker 
                including versions of Lorem Ipsum.</p>
    </footer>
</body>
</html>`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  function hideIncompleteRow() {
    const productGrid = document.querySelector('.product-grid');
    const productCards = Array.from(document.querySelectorAll('.product-card'));
    if (productCards.length === 0) return;
    productCards.forEach(card => card.style.display = '');
    const gridRect = productGrid.getBoundingClientRect();
    const cardRects = productCards.map(card => card.getBoundingClientRect());
    const firstRowTop = cardRects[0].top;
    let currentRowTop = firstRowTop;
    let visibleCards = [];
    cardRects.forEach((rect, index) => {
      if (Math.abs(rect.top - currentRowTop) < 10) {
        visibleCards.push(productCards[index]);
      } else {
        currentRowTop = rect.top;
      }
    });
    const firstRowCards = cardRects.filter(rect => Math.abs(rect.top - firstRowTop) < 10).length;
    const fullRows = Math.floor(productCards.length / firstRowCards);
    const cardsToShow = fullRows * firstRowCards;
    productCards.forEach((card, index) => {
      if (index >= cardsToShow) {
        card.style.display = 'none';
      }
    });
  }
  setTimeout(hideIncompleteRow, 100);
  window.addEventListener('resize', hideIncompleteRow);
});

// Функция для управления состоянием меню
const menuToggle = document.getElementById('menu-toggle');
const body = document.body;
const menuOverlay = document.querySelector('.menu-overlay');
menuToggle.addEventListener('change', function () {
  if (this.checked && window.innerWidth <= 639) {
    body.classList.add('menu-open');
  } else {
    body.classList.remove('menu-open');
  }
});

// Функция для добавления тени при скролле
const scrollHeader = () => {
  const header = document.getElementById('header');
  if (window.scrollY >= 10) {
    header.classList.add('bg-header');
  } else {
    header.classList.remove('bg-header');
  }
};
window.addEventListener('scroll', scrollHeader);
document.addEventListener('DOMContentLoaded', scrollHeader);
document.addEventListener('DOMContentLoaded', function () {
  // Функционал скрытия неполных рядов товаров
  function hideIncompleteRow() {
    const productGrid = document.querySelector('.product-grid');
    const productCards = Array.from(document.querySelectorAll('.product-card'));
    if (productCards.length === 0) return;
    productCards.forEach(card => card.style.display = '');
    const gridRect = productGrid.getBoundingClientRect();
    const cardRects = productCards.map(card => card.getBoundingClientRect());
    const firstRowTop = cardRects[0].top;
    let currentRowTop = firstRowTop;
    let visibleCards = [];
    cardRects.forEach((rect, index) => {
      if (Math.abs(rect.top - currentRowTop) < 10) {
        visibleCards.push(productCards[index]);
      } else {
        currentRowTop = rect.top;
      }
    });
    const firstRowCards = cardRects.filter(rect => Math.abs(rect.top - firstRowTop) < 10).length;
    const fullRows = Math.floor(productCards.length / firstRowCards);
    const cardsToShow = fullRows * firstRowCards;
    productCards.forEach((card, index) => {
      if (index >= cardsToShow) {
        card.style.display = 'none';
      }
    });
  }
  setTimeout(hideIncompleteRow, 100);
  window.addEventListener('resize', hideIncompleteRow);

  // Функционал меню
  const menuToggle = document.getElementById('menu-toggle');
  const body = document.body;
  if (menuToggle) {
    menuToggle.addEventListener('change', function () {
      if (this.checked && window.innerWidth <= 639) {
        body.classList.add('menu-open');
      } else {
        body.classList.remove('menu-open');
      }
    });
  }

  // Функция для добавления тени при скролле
  const scrollHeader = () => {
    const header = document.getElementById('header');
    if (header) {
      if (window.scrollY >= 10) {
        header.classList.add('bg-header');
      } else {
        header.classList.remove('bg-header');
      }
    }
  };
  window.addEventListener('scroll', scrollHeader);
  document.addEventListener('DOMContentLoaded', scrollHeader);

  // Функционал корзины
  class Cart {
    constructor() {
      this.items = JSON.parse(localStorage.getItem('cart')) || [];
      this.init();
    }
    init() {
      this.updateCartCount();
      this.setupEventListeners();
      this.renderCart();
    }
    setupEventListeners() {
      // Обработчики для кнопок "Купить"
      document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', e => {
          const productCard = e.target.closest('.product-card');
          if (productCard) {
            this.addToCart(productCard);
          }
        });
      });

      // Обработчики для иконки корзины
      const cartIcon = document.querySelector('.bx-cart');
      if (cartIcon) {
        cartIcon.closest('.icon').addEventListener('click', e => {
          e.preventDefault();
          this.openCart();
        });
      }

      // Обработчики для модального окна корзины
      const closeCartBtn = document.querySelector('.close-cart');
      if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
          this.closeCart();
        });
      }
      const cartModal = document.querySelector('.cart-modal');
      if (cartModal) {
        cartModal.addEventListener('click', e => {
          if (e.target.classList.contains('cart-modal')) {
            this.closeCart();
          }
        });
      }

      // Обработчик для кнопки оформления заказа
      const orderButton = document.getElementById('orderButton');
      if (orderButton) {
        orderButton.addEventListener('click', () => {
          this.placeOrder();
        });
      }
    }
    addToCart(productCard) {
      const productName = productCard.querySelector('h3');
      const productPrice = productCard.querySelector('.product-price');
      const productImage = productCard.querySelector('img');
      if (!productName || !productPrice || !productImage) {
        console.error('Не удалось найти информацию о товаре');
        return;
      }
      const product = {
        id: this.generateId(),
        name: productName.textContent,
        price: parseInt(productPrice.textContent.replace(/\s|₽/g, '')),
        image: productImage.src,
        quantity: 1
      };
      const existingItem = this.items.find(item => item.name === product.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push(product);
      }
      this.saveToLocalStorage();
      this.updateCartCount();
      this.renderCart();
      this.showNotification();
    }
    removeFromCart(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
      this.saveToLocalStorage();
      this.updateCartCount();
      this.renderCart();
    }
    updateQuantity(itemId, change) {
      const item = this.items.find(item => item.id === itemId);
      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
          this.removeFromCart(itemId);
        } else {
          this.saveToLocalStorage();
          this.updateCartCount();
          this.renderCart();
        }
      }
    }
    updateCartCount() {
      const cartIcon = document.querySelector('.bx-cart');
      if (!cartIcon) return;
      const cartCount = document.querySelector('.cart-count');
      const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
      if (totalItems > 0) {
        if (!cartCount) {
          const countElement = document.createElement('div');
          countElement.className = 'cart-count';
          cartIcon.closest('.icon').appendChild(countElement);
        }
        document.querySelector('.cart-count').textContent = totalItems;
      } else if (cartCount) {
        cartCount.remove();
      }
    }
    renderCart() {
      const cartItems = document.getElementById('cartItems');
      const emptyCartMessage = document.getElementById('emptyCartMessage');
      const cartTotal = document.getElementById('cartTotal');
      const orderButton = document.getElementById('orderButton');
      if (!cartItems) {
        console.error('Элемент cartItems не найден');
        return;
      }
      if (this.items.length === 0) {
        // Показываем сообщение о пустой корзине
        if (emptyCartMessage) {
          emptyCartMessage.style.display = 'block';
        }
        cartItems.innerHTML = emptyCartMessage ? emptyCartMessage.outerHTML : '<div class="empty-cart-message">Корзина пуста</div>';
        if (orderButton) {
          orderButton.disabled = true;
        }
        if (cartTotal) {
          cartTotal.textContent = '0 ₽';
        }
        return;
      }

      // Скрываем сообщение о пустой корзине
      if (emptyCartMessage) {
        emptyCartMessage.style.display = 'none';
      }
      if (orderButton) {
        orderButton.disabled = false;
      }

      // Рассчитываем общую сумму
      const total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      if (cartTotal) {
        cartTotal.textContent = `${total.toLocaleString()} ₽`;
      }

      // Рендерим товары в корзине
      cartItems.innerHTML = this.items.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', -1)">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', 1)">+</button>
                        <button class="remove-btn" onclick="cart.removeFromCart('${item.id}')">
                            <i class='bx bx-trash'></i>
                        </button>
                    </div>
                </div>
            `).join('');
    }
    openCart() {
      const cartModal = document.querySelector('.cart-modal');
      if (cartModal) {
        cartModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
    closeCart() {
      const cartModal = document.querySelector('.cart-modal');
      if (cartModal) {
        cartModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
    showNotification() {
      const notification = document.getElementById('cartNotification');
      if (notification) {
        notification.classList.add('show');
        setTimeout(() => {
          notification.classList.remove('show');
        }, 3000);
      }
    }
    placeOrder() {
      if (this.items.length === 0) return;
      const total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      alert(`Заказ оформлен!\n\nТоваров: ${this.items.reduce((sum, item) => sum + item.quantity, 0)}\nОбщая сумма: ${total.toLocaleString()} ₽\n\nСпасибо за покупку!`);
      this.items = [];
      this.saveToLocalStorage();
      this.updateCartCount();
      this.renderCart();
      this.closeCart();
    }
    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
    generateId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
  }

  // Инициализация корзины
  const cart = new Cart();
  window.cart = cart; // Делаем глобально доступной для обработчиков в HTML
});

/***/ }),

/***/ "./src/style.scss?75ba":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.scss?ebcd":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8aeec066af66db222afe.scss";

/***/ }),

/***/ "./src/svg/catalog.svg":
/*!*****************************!*\
  !*** ./src/svg/catalog.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/catalog.svg";

/***/ }),

/***/ "./src/svg/contact.svg":
/*!*****************************!*\
  !*** ./src/svg/contact.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/contact.svg";

/***/ }),

/***/ "./src/svg/house.svg":
/*!***************************!*\
  !*** ./src/svg/house.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/house.svg";

/***/ }),

/***/ "./src/svg/percent.svg":
/*!*****************************!*\
  !*** ./src/svg/percent.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/percent.svg";

/***/ }),

/***/ "./src/svg/truck-speed.svg":
/*!*********************************!*\
  !*** ./src/svg/truck-speed.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/truck-speed.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss?75ba");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=index.bcea1f86bc00119be707.js.map