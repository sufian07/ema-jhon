import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products,setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products')
        .then(res => res.json()
        .then(data =>setProducts(data)))
    },[])
    return (
        <div>
            <form action=""></form>
        </div>
    );
};

export default Products;