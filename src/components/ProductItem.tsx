import React from 'react';
import { Product } from './Product';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className = "relative w-full bg-white overflow-y-hidden rounded-2xl shadow-lg group">
            <div className="p-4 grid grid-rows-4 justify-center h-full w-full" >
                <div className=" row-span-3 flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="h-full w-full object-contain "/>
                    </div>
                <div className="flex h-auto items-center w-full max-h-32 overflow-hidden">
                    <h2 className="flex-1">{product.title}</h2>
                    <p className="text-right min-w-24">${product.price}</p>
                </div>
            </div>
            <div className="absolute h-full w-full bg-black/60 flex flex-col items-center justify-center text-white -bottom-0 blur-sm group-hover:blur-0 opacity-0 group-hover:opacity-100 transition-all duration-150">
                <h1 className="mx-4 text-2xl text-center font-bold">{product.title}</h1>
                <p className="mx-4 text-justify my-8 h-64 overflow-auto ">{product.description}</p>
                <button className="bg-sky-300 text-black rounded-xl py-2 px-4">Add to cart</button>
            </div>
        </div>
    );
};
export default ProductItem;

/*<p>{product.description}</p>*/
/*
<div className=" absolute h-full w-full bg-black/60 flex flex-col items-center justify-center text-white -bottom-0 blur-sm group-hover:blur-0 opacity-0 group-hover:opacity-100 transition-all duration-150">
                <h1 className="mx-4 text-2xl text-center font-bold">{product.title}</h1>
                <p className="mx-4 text-justify my-8 h-64 overflow-auto">{product.description}</p>
                <button className="bg-sky-300 text-black rounded-xl py-2 px-4">Add to cart</button>
            </div>


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