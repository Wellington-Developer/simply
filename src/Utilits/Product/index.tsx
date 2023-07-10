// Styles
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './styles.css';

type ProductType = {
    imgLink: string, 
    title: string, 
    price: number,
    linkProduct?: string 
}



export const Product = ({ imgLink, title, price, linkProduct }: ProductType) => {
    return (
        <div className="single-content__product">
            <img src={imgLink} />
            <div className="info-product">
                <div className="left-side">
                    <h1>{title}</h1>
                    <p>R$ {price}</p>
                </div>
                {
                    linkProduct && 
                    <Link to={linkProduct}>
                        <Button />
                    </Link>
                }
            </div>
        </div>
    )
}