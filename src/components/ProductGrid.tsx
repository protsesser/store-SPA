import React from 'react';
import useFetchProducts from '../services/useFetchProducts';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
    const { products} = useFetchProducts();
    return (
        <div className=" grid-cols-4 gap-x-4 gap-y-8 grid justify-between h-4/5 ">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;


