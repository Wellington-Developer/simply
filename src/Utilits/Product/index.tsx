// Styles
import { Button } from '../Button';
import './styles.css';
import { useEffect, useState } from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

type ProductType = {
    category: string,
    index?: number,
}

type Product = {
    image: string,
    title: string,
    price: number,
    id: string,
}


export const Product = ({ category, index }: ProductType) => {
    const [products, setProducts] = useState<Product>();

    const fetchProducts = () => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=> setProducts(json))
    }

    useEffect(() => {
        fetchProducts()
    }, [products])
    
    return (
        products &&  <Link to={`/product/${products[index].id}`}>
            <div className="single-content__product">
            <img src={products[index].image} />
                {
                        <div className="info-product">
                        <div className="left-side">
                            <h1>{products[index].title}</h1>
                            <p>R$ {products[index].price}</p>
                        </div>
                        {
                            <Button />
                        }
                    </div>
                }
            </div>
        </Link>
    )
}