import React from 'react';
import { Product } from './Product';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className = "relative w-full bg-white overflow-hidden rounded-2xl shadow-lg group">
            <div className="p-4 pb-0 grid grid-rows-4 justify-center h-full w-full" >
                <div className="row-span-3 flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="h-full w-full object-contain "/>
                    </div>
                <div className="flex h-auto  w-full max-h-24 overflow-hidden text-2xl mt-2">
                    <h2 className="flex-1 align-top">{product.title}</h2>
                    <p className="text-right min-w-24 font-semibold">${product.price}</p>
                </div>
            </div>
            <div className="absolute h-full w-full bg-black/70 flex flex-col items-center justify-center text-white -bottom-0 blur-sm group-hover:blur-0 opacity-0 group-hover:opacity-100 transition-all duration-250 no-scrollbar py-4">
                <h1 className="mx-4 text-3xl text-center font-averia-libre font-bold">{product.title}</h1>
                <p className="mx-4 text-justify my-8 h-72 overflow-y-scroll no-scrollbar">{product.description}</p>
                <button className="bg-sky-400 text-black text-2xl rounded-xl py-4 px-6 hover:bg-sky-600 hover:scale-105 transition-all duration-100 font-averia-libre font-bold">Add to cart</button>
            </div>
        </div>
    );
};
export default ProductItem;