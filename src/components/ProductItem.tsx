// src/components/ProductItem.tsx
import React from 'react';
import { Product } from './Product';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className = "w-64 h-80 bg-white overflow-y-hidden rounded-xl">
            <div className="h-64 w-64 content-center grid place-content-center">
            <img src={product.image} alt={product.title} className=" max-w-60 max-h-60"/>
            </div>
            <div className="flex text-lg mx-2">
            <h2 className="flex-1 w-24 ">{product.title}</h2>
            <p className=" text-right">${product.price}</p>
            </div>
        </div>
    );
};
//<p>{product.description}</p>
export default ProductItem;
