import React from "react";
import "./header.css";
import {NavLink} from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import {motion} from "framer-motion";

import {Container, Row} from "reactstrap";

const Header = () => {
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
		<header className="header">
			<Container>
				<Row>
					<div className="nav__wrapper">
						<div className="logo">
							<span>
								<i className="ri-shopping-bag-line"></i>
							</span>
							<div>
								<h1>Shop</h1>
							</div>
						</div>

						<div className="navigation">
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
								<span className="quantity">1</span>
							</span>
							<span className="heart__icon">
								<i className="ri-heart-line"></i>
								<span className="quantity">1</span>
							</span>
							<span>
								<motion.img whileTap={{scale: 1.3}} src={userIcon} alt="userIcon" />
							</span>
						</div>

						<div className="mobile__menu">
							<span>
								<i className="ri-menu-fill"></i>
							</span>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;