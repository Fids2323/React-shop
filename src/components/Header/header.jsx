import React, {useRef, useEffect} from "react";
import "./header.css";
import {NavLink, useNavigate, Link} from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import {motion} from "framer-motion";
import logoImg from "../../assets/images/eco-logo.png";
import {useSelector} from "react-redux";
import useAuth from "../../hooks/useAuth.js";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase.config";

import {Container, Row} from "reactstrap";
import {toast} from "react-toastify";

const Header = () => {
	const headerRef = useRef(null);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const menuRef = useRef(null);
	const navigate = useNavigate();
	const {currentUser} = useAuth();
	const profileActionRef = useRef(null);

	const stickyHeaderFunc = () => {
		window.addEventListener("scroll", () => {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				headerRef.current.classList.add("sticky__header");
			} else {
				headerRef.current.classList.remove("sticky__header");
			}
		});
	};

	const logout = () => {
		signOut(auth)
			.then(() => {
				toast.success("Logged out");
				navigate("/home");
			})
			.catch((error) => {
				toast.error(error.message);
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
	const navigateToCart = () => {
		navigate("/cart");
	};

	const toggleProfileActions = () => {
		profileActionRef.current.classList.toggle("show__profileActions");
	};

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
							<span className="cart__icon" onClick={navigateToCart}>
								<i className="ri-shopping-cart-2-line"></i>
								<span className="quantity">{totalQuantity}</span>
							</span>
							<span className="heart__icon">
								<i className="ri-heart-line"></i>
								<span className="quantity">1</span>
							</span>
							<div className="profile">
								<motion.img whileTap={{scale: 1.2}} src={currentUser ? currentUser.photoURL : userIcon} alt="userIcon" onClick={toggleProfileActions} />

								<div className="profile__actions" ref={profileActionRef} onClick={toggleProfileActions}>
									{currentUser ? (
										<span onClick={logout}>Logout</span>
									) : (
										<div className="d-flex align-items-center justify-content-center flex-column">
											<Link to="/signup">Signup</Link>
											<Link to="/login">Login</Link>
											<Link to="/dashboard">Dashboard</Link>
										</div>
									)}
								</div>
							</div>
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
