import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";

import Home from "../pages/Home/home.jsx";
import Cart from "../pages/Cart/cart.jsx";
import SupplyDetails from "../pages/SupplyDetails/supplyDetails.jsx";
import Shop from "../pages/Shop/shop.jsx";
import Checkout from "../pages/Checkout/checkout.jsx";
import Login from "../pages/Login/login.jsx";
import SignUp from "../pages/SignUp/signUp.jsx";
import ProtectedRoute from "./ProtectedRoute.js";
import AddProduct from "../admin/addProduct.jsx";
import AllProducts from "../admin/allProducts.jsx";
import Dashboard from "../admin/dashboard.jsx";

const Routers = () => {
	return (
		<>
			<Routes>
				<Route path="shop/:id" element={<SupplyDetails />} />
				<Route path="shop" element={<Shop />} />
				<Route path="cart" element={<Cart />} />

				<Route path="*/" element={<ProtectedRoute />}>
					<Route path="checkout" element={<Checkout />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="dashboard/all-products" element={<AllProducts />} />
					<Route path="dashboard/add-product" element={<AddProduct />} />
				</Route>

				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="home" element={<Home />} />
				<Route path="/" element={<Navigate to="home" />} />
			</Routes>
		</>
	);
};

export default Routers;
