// Styles
import { ButtonBuy } from '../../Utilits/ButtonBuy';
import './styles.css'

// React Icons
import { AiFillStar, AiFillCreditCard } from 'react-icons/ai';


export const ProductPage = () => {
    return (
        <div className="info-product__page">
            <div className="left-side__content">
                <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=647&q=80" />
            </div>
            <div className="right-side__content">
                <h3 id="price">R$ 289</h3>
                <h1>Controle de PS4</h1>
                <div className="icons">
                    <div className="icons-content">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    5 estrelas!
                </div>
                <p>Revolucionário, intuitivo e preciso: o controle sem fio DualShock 4 para o sistema PlayStation 4 define esta geração de jogos, combinando recursos revolucionários e conforto com controles precisos e intuitivos.</p>
                <div className="payment-method__info">
                    <div className="box-payment"><AiFillCreditCard />10% de desconto para pagamento via PIX</div>
                    <div className="box-payment"><AiFillCreditCard />10x sem juros no cartão de crédito (ver parcelas)</div>
                </div>
                <div className="select-inputs">
                    <select name="Cor">
                        <option value="color">Cor</option>
                        <option value="preto">Preto</option>
                        <option value="cinza">Cinza</option>
                        <option value="azul_marinho">Azul Marinho</option>
                        <option value="amarelo">Amarelo</option>
                    </select>
                    <select name="tamanho">
                        <option value="color">Material</option>
                        <option value="preto">P</option>
                        <option value="cinza">M</option>
                        <option value="azul_marinho">GG</option>
                        <option value="amarelo">XGG</option>
                    </select>
                </div>
                <div className="buttons">
                    <ButtonBuy text='Adicionar ao Carrinho' wpp={false}/>
                    <ButtonBuy text='Comprar pelo Whatsapp' wpp={true}/>
                </div>
            </div>
        </div>
    )
}