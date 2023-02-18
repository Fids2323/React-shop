import React, {useRef, useState} from "react";
import {Container, Row, Col} from "reactstrap";
import {useParams} from "react-router-dom";
import products from "../../assets/data/products";
import Helmet from "../../components/helmet/helmet";
import CommonSection from "../../components/UI/CommonSection/commonSection";
import "./supplyDetails.css";
import {motion} from "framer-motion";
import ProductsList from "../../components/UI/productList";
import {useDispatch} from "react-redux";
import {cartActions} from "../../redux/slices/cartSlice";
import {toast} from "react-toastify";

const SupplyDetails = () => {
	const [tab, setTab] = useState("desc");
	const reviewUser = useRef("");
	const reviewMessage = useRef("");
	const [rating, setRating] = useState(null);
	const {id} = useParams();
	const product = products.find((product) => product.id === id);
	const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = product;
	const dispatch = useDispatch();

	const relatedProducts = products.filter((item) => item.category === category);

	const handleSubmit = (e) => {
		e.preventDefault();
		const reviewUserName = reviewUser.current.value;
		const reviewUserMessage = reviewMessage.current.value;
	};

	const addToCart = () => {
		dispatch(
			cartActions.addItem({
				id,
				image: imgUrl,
				productName,
				price,
			})
		);
		toast.success("Product added successfully");
	};

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
							<div className="d-flex align-items-center gap-5">
								<span className="product__price">${price}</span>
								<span>Category: {category.toUpperCase()}</span>
							</div>
							<p className="mt-3">{shortDesc}</p>
							<motion.button whileTap={{scale: 1.2}} className="buy__btn" onClick={addToCart}>
								Add to Cart
							</motion.button>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<Row>
						<Col lg="12">
							<div className="tab__wrapper d-flex align-items-center gap-5">
								<h6 className={`${tab === "desc" ? "active__tab" : ""}`} onClick={() => setTab("desc")}>
									Description
								</h6>
								<h6 className={`${tab === "rev" ? "active__tab" : ""}`} onClick={() => setTab("rev")}>
									Reviews ({reviews.length})
								</h6>
							</div>

							{tab === "desc" ? (
								<div className="tab__content mt-5">
									<p>{description}</p>
								</div>
							) : (
								<div className="product__review mt-5">
									<div className="review__wrapper">
										<ul>
											{reviews?.map((item, index) => (
												<li key={index} className="mb-4">
													<h6>Jhon Doe</h6>
													<span>{item.rating} (rating)</span>
													<p>{item.text}</p>
												</li>
											))}
										</ul>

										<div className="review__form">
											<form action="" onSubmit={handleSubmit}>
												<h4>Leave your experience</h4>

												<div className="form__group">
													<input ref={reviewUser} type="text" placeholder="Enter name" />
												</div>

												<div className="form__group d-flex align-items-center gap-5">
													<span onClick={() => setRating(1)}>
														1<i className="ri-star-s-fill"></i>
													</span>
													<span onClick={() => setRating(2)}>
														2<i className="ri-star-s-fill"></i>
													</span>
													<span onClick={() => setRating(3)}>
														3<i className="ri-star-s-fill"></i>
													</span>
													<span onClick={() => setRating(4)}>
														4<i className="ri-star-s-fill"></i>
													</span>
													<span onClick={() => setRating(5)}>
														5<i className="ri-star-s-fill"></i>
													</span>
												</div>

												<div className="form__group">
													<textarea ref={reviewMessage} rows={4} type="text" placeholder="Rewiew Message.." />
												</div>

												<button type="submit" className="buy__btn">
													Submit
												</button>
											</form>
										</div>
									</div>
								</div>
							)}
						</Col>
						<Col lg="12" className="mt-5">
							<h2 className="related__title">You might also like</h2>
						</Col>
						<ProductsList data={relatedProducts} />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default SupplyDetails;
