// Styles
import './styles.css';

export const ButtonBuy = ({text, wpp}: any) => {
    return (
        wpp ? (
            <a className="button-wpp">
            {text}
        </a>
        ) : <a className="button-buy">
            {text}
        </a>
    )
}