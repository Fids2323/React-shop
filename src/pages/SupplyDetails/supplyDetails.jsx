import React from "react";
import {Container, Row, Col} from "reactstrap";
import {useParams} from "react-router-dom";
import products from "../../assets/data/products";
import Helmet from "../../components/helmet/helmet";
import CommonSection from "../../components/UI/CommonSection/commonSection";
import "./supplyDetails.css";
import {motion} from "framer-motion";

const SupplyDetails = () => {
	const {id} = useParams();
	const product = products.find((product) => product.id === id);
	const {imgUrl, productName, price, avgRating, review, description, shortDesc} = product;

	return (
		<Helmet title={productName}>
			<CommonSection title={productName} />

			<section className="pt-0">
				<Container>
					<Row>
						<Col lg="6">
							<img src={imgUrl} alt="" />
						</Col>
						<Col lg="6">
							<div className="product__details">
								<h2>{productName}</h2>
								<div className="product__rating d-flex align-items-center gap-5 mb-3">
									<div>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-half-s-line"></i>
										</span>
									</div>
									<p>
										(<span>{avgRating}</span> ratings)
									</p>
								</div>
							</div>
							<span className="product__price">${price}</span>
							<p className="mt-3">{shortDesc}</p>
							<motion.button whileTap={{scale: 1.2}} className="buy__btn">
								Add to Cart
							</motion.button>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default SupplyDetails;