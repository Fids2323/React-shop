import React from "react";
import Routers from "../../routers/routers";
import Footer from "../Footer/footer";
import Header from "../Header/header";

const Layout = () => {
	return (
		<>
			<Header />
			<div>
				<Routers />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
