import React from "react";
import ProductCard from "./ProductCard/productCard";

const ProductList = ({data}) => {
	return (
		<>
			{data?.map((item, index) => (
				<ProductCard item={item} key={index} />
			))}
		</>
	);
};

export default ProductList;
