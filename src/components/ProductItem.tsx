// src/components/ProductItem.tsx
import React from 'react';
import { Product } from './Product';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className = " w-full bg-white overflow-y-hidden rounded-2xl ">
            <div className="p-4 grid grid-rows-4 justify-center h-full w-full" >
                <div className=" row-span-3 flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="h-full w-full object-contain "/>
                    </div>
                <div className="flex text-xl h-full items-center w-full">
                    <h2 className="flex-1">{product.title}</h2>
                    <p className="text-right min-w-24">${product.price}</p>
                </div>
            </div>
        </div>
    );
};
/*<p>{product.description}</p>*/
export default ProductItem;
/*
                <div className = " w-full bg-white overflow-y-hidden rounded-2xl h-2/5">
            <div className="p-4 grid grid-rows-5 justify-center h-full" >
                <div className=" row-span-4">
                    <img src={product.image} alt={product.title} className=" w-full h-fit object-cover "/>
                </div>
                <div className="flex text-lg mx-2 h-full">
                    <h2 className="flex-1 w-24 ">{product.title}</h2>
                    <p className="text-right">${product.price}</p>
                </div>
            </div>
        </div>
        </div>*/