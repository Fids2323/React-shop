import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";

import Home from "../pages/Home/home.jsx";
import Cart from "../pages/Cart/cart.jsx";
import SupplyDetails from "../pages/SupplyDetails/supplyDetails.jsx";
import Shop from "../pages/Shop/shop.jsx";
import Checkout from "../pages/checkout.jsx";
import Login from "../pages/login.jsx";
import SignUp from "../pages/signUp.jsx";

const Routers = () => {
	return (
		<>
			<Routes>
				<Route path="shop/:id" element={<SupplyDetails />} />
				<Route path="shop" element={<Shop />} />
				<Route path="cart" element={<Cart />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="home" element={<Home />} />
				<Route path="/" element={<Navigate to="home" />} />
			</Routes>
		</>
	);
};

export default Routers;
