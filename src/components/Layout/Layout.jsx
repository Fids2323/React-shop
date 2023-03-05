import React from "react";
import Routers from "../../routers/routers";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import AdminNav from "../../admin/adminNav";

import {useLocation} from "react-router-dom";

const Layout = () => {
	const location = useLocation();
	return (
		<>
			{location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
			<div>
				<Routers />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
