import React from "react";
import ProductCard from "./ProductCard/productCard";

const ProductList = ({data}) => {
	return (
		<>
			{data?.map((item) => (
				<ProductCard item={item} />
			))}
		</>
	);
};

export default ProductList;
