import React, {useRef, useEffect} from "react";
import "./header.css";
import {NavLink} from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import {motion} from "framer-motion";
import logoImg from "../../assets/images/eco-logo.png";
import {useSelector} from "react-redux";

import {Container, Row} from "reactstrap";

const Header = () => {
	const headerRef = useRef(null);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const menuRef = useRef(null);

	const stickyHeaderFunc = () => {
		window.addEventListener("scroll", () => {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				headerRef.current.classList.add("sticky__header");
			} else {
				headerRef.current.classList.remove("sticky__header");
			}
		});
	};

	useEffect(() => {
		stickyHeaderFunc();
		return () => {
			window.removeEventListener("scroll", stickyHeaderFunc);
		};
	});

	const menuToggle = () => {
		menuRef.current.classList.toggle("active__menu");
	};

	const links = [
		{
			path: "home",
			text: "Home",
		},
		{
			path: "shop",
			text: "Shop",
		},
		{
			path: "cart",
			text: "Cart",
		},
	];
	return (
		<header className="header" ref={headerRef}>
			<Container>
				<Row>
					<div className="nav__wrapper">
						<div className="logo">
							<img src={logoImg} alt="logoImg" />
							<div>
								<h1>Shop</h1>
							</div>
						</div>

						<div className="navigation" ref={menuRef} onClick={menuToggle}>
							<ul className="menu">
								{links.map(({path, text}, index) => (
									<li key={index} className="nav__item">
										<NavLink to={path} className={(navClass) => (navClass.isActive ? "nav__active" : "")}>
											{text}
										</NavLink>
									</li>
								))}
							</ul>
						</div>

						<div className="nav__icons">
							<span className="cart__icon">
								<i className="ri-shopping-cart-2-line"></i>
								<span className="quantity">{totalQuantity}</span>
							</span>
							<span className="heart__icon">
								<i className="ri-heart-line"></i>
								<span className="quantity">1</span>
							</span>
							<span>
								<motion.img whileTap={{scale: 1.2}} src={userIcon} alt="userIcon" />
							</span>
							<div className="mobile__menu">
								<span onClick={menuToggle}>
									<i className="ri-menu-fill"></i>
								</span>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
