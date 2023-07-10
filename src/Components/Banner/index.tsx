// Styles
import { Banner } from '../../Utilits/Banner';
import './styles.css';

// React Icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export const BannerContainer = () => {

    return (
        <div className="principal-container__banner" >
            <div className="banners">
                <Banner />
                <Banner />
                <Banner />
            </div>
            <div className="button-product__banner">
                <button><AiOutlineArrowLeft /></button>
                <button><AiOutlineArrowRight /></button>
            </div>
        </div>
    )
}