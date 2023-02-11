import Helmet from "../../components/helmet/helmet";
import {Container, Row, Col} from "reactstrap";
import mainImg from "../../assets/images/hero-img.png";
import "./home.css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Services from "../../Services/services";
import ProductList from "../../components/UI/productList";
import products from "../../assets/data/products";
import {useEffect, useState} from "react";
import counterImg from "../../assets/images/counter-timer-img.png";
import Clock from "../../components/UI/clock/clock";

const Home = () => {
	const [trendingProducts, setTrendingProducts] = useState([]);
	const [bestSalesProducts, setBestSalesProducts] = useState([]);
	const [mobileProducts, setMobileProducts] = useState([]);
	const [wirelessProducts, setWirelessProducts] = useState([]);
	const [popularProducts, setPopularProducts] = useState([]);

	const currentYear = new Date().getFullYear();
	useEffect(() => {
		const filteredTrendingProducts = products.filter((item) => item.category === "chair");
		const filteredBestSalesProducts = products.filter((item) => item.category === "sofa");
		const filteredMobileProducts = products.filter((item) => item.category === "mobile");
		const filteredWirelessProducts = products.filter((item) => item.category === "wireless");
		const filteredPopularProducts = products.filter((item) => item.category === "watch");

		setTrendingProducts(filteredTrendingProducts);
		setBestSalesProducts(filteredBestSalesProducts);
		setMobileProducts(filteredMobileProducts);
		setWirelessProducts(filteredWirelessProducts);
		setPopularProducts(filteredPopularProducts);
	}, []);
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
			<Services />

			<section className="popular__products">
				<Container>
					<Row>
						<Col lg="12" className="text-center">
							<h2 className="section__title">Popular Products</h2>
						</Col>
						<ProductList data={trendingProducts} />
					</Row>
				</Container>
			</section>

			<section className="best__sales">
				<Container>
					<Row>
						<Col lg="12" className="text-center">
							<h2 className="section__title">Best Sales</h2>
						</Col>
						<ProductList data={bestSalesProducts} />
					</Row>
				</Container>
			</section>
			<section className="timer__count">
				<Container>
					<Row>
						<Col lg="6" md="12" className="count__down-col">
							<div className="clock__top-content">
								<h4 className="text-white fs-6 mb-2">Limited Offers</h4>
								<h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
							</div>
							<Clock />
							<motion.button whileTap={{scale: 1.2}} className="buy__btn store__btn">
								<Link to="/shop">Visit Store</Link>
							</motion.button>
						</Col>
						<Col lg="6" md="12" className="text-end counter__image">
							<img src={counterImg} alt="" />
						</Col>
					</Row>
				</Container>
			</section>
			<section className="new__arrivals">
				<Container>
					<Row>
						<Col lg="12" className="text-center">
							<h2 className="section__title">New Arrivals</h2>
						</Col>
						<ProductList data={mobileProducts} />
						<ProductList data={wirelessProducts} />
					</Row>
				</Container>
			</section>
			<section className="popular__category">
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-5">
							<h2 className="section__title">Popular in Category</h2>
						</Col>
						<ProductList data={popularProducts} />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};
export default Home;
