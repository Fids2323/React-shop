import React from "react";
import Helmet from "../../components/helmet/helmet";
import {Container, Row, Col} from "reactstrap";
import mainImg from "../../assets/images/hero-img.png";
import "./home.css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Home = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Helmet title={"Home"}>
			<section className="main">
				<Container>
					<Row>
						<Col lg="6" md="6">
							<div className="main__content">
								<p className="main__subtitle">Popular product in {currentYear}</p>
								<h2>Keep up with the times and achieve success</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum itaque aspernatur doloribus voluptate impedit cumque magni totam eveniet beatae.</p>
								<motion.button whileTap={{scale: 1.2}} className="buy__btn">
									<Link to="/shop">Buy now</Link>
								</motion.button>
							</div>
						</Col>

						<Col lg="6" md="6">
							<img src={mainImg} alt="mainImg" />
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};
export default Home;
