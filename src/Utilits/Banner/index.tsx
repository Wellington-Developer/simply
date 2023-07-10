// Styles
import './styles.css';

export const Banner = () => {
    return (
        <div className="banner">
            <div className="image-product__banner">
                <img src="https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            </div>
            <div className="info-product__banner">
                <h1>Visite - Hisma Desert</h1>
                <p>NEOM, Saudi Arabia</p>
            </div>
        </div>
    )
}