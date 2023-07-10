// Styles
import './styles.css';

// React Components
import { RowProductsType } from '../../types/RowProducts';
import { Product } from '../../Utilits/Product';

export const RowProducts = ({ title }: RowProductsType) => {
    return (
        <div className="principal-container__products">
            <div className="title-content__products">
                <h1>{title}</h1>
                <a href="#">Ver mais</a>
            </div>

            <div className="container-section__products">
                <Product imgLink='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' title='Lago di Braies' price={120} linkProduct='/product'/>
                <Product imgLink='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80' title='Lago di Braies' price={120} linkProduct='/product'/>
                <Product imgLink='https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' title='Lago di Braies' price={120} linkProduct='/product'/>
            </div>
        </div>
    )
}