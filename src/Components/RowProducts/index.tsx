// Styles
import './styles.css';

// Components
import { Product } from '../../Utilits/Product';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const RowProducts = () => {
    const [categories, setCategories] = useState([])

    const fetchCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <>
            {
                categories && categories.map((category) => {
                    return <div className="principal-container__products">
                        <div className="title-content__products">
                            <h1>{category}</h1>
                            <Link to={`/category/${category}`}>Ver mais</Link>

                        </div>
                        <div className="container-section__products">
                            <Product category={category} index={0}/>
                            <Product category={category} index={1}/>
                            <Product category={category} index={2}/>
                        </div>
                    </div>
                })
            }
        </>
    )
}