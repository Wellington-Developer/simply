// React Hooks
import { useParams } from 'react-router-dom';
import { Product } from '../../Utilits/Product';
import { useEffect, useState } from 'react';

// Styles
import './styles.css'

export const CategoryProducts = () => {
    const param = useParams();
    const [products, setProduct] = useState<any[]>();

    const fetchProducts = () => {
        fetch(`https://fakestoreapi.com/products/category/${param.id}`)
        .then(r => r.json())
        .then(response => setProduct(response))
    }

    useEffect(() => {
        fetchProducts()
    }, [param.id])

    return (
        <div className="category-container__products">
            <h1 id="title">{param.id}</h1>
            <div className="category-content__products">
                {
                    products && products.map((product, index) => {
                        return <Product category={product.category} index={index} key={index}/> 
                    })
                }
            </div>
        </div>
    )
}