// src/components/ProductList.tsx
import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
    const { products, loading, error } = useFetchProducts();

    if (loading) 
        return <p>Загрузка контента</p>;
    if (error) 
        return <p>Error: {error}</p>;

    return (
        <div>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
