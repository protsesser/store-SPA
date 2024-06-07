import { useState, useEffect } from 'react';
import { Product } from '../components/Product';

const useFetchProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {            
            const response = await fetch('https://fakestoreapi.com/products');
            const data: Product[] = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return { products };
};

export default useFetchProducts;
