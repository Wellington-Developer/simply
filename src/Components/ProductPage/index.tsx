// Styles
import { useEffect, useState } from 'react';
import { ButtonBuy } from '../../Utilits/ButtonBuy';
import './styles.css'

// React Icons
import { AiFillStar, AiFillCreditCard } from 'react-icons/ai';

// React Hooks - Router DOM
import { useParams } from 'react-router-dom';

type ProductType = {
    image: string,
    title: string,
    description: string,
    price: number
}

export const ProductPage = () => {
    const params = useParams();
    const [product, setProduct] = useState<ProductType>()

    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(r => r.json())
        .then(response => setProduct(response))
    }

    useEffect(() => {
        fetchProduct()
    }, [])


    return (
        product && <div className="info-product__page">
            <div className="left-side__content">
                <img src={product.image} />
            </div>
            <div className="right-side__content">
                <h3 id="price">R$ {product.price}</h3>
                <h1>{product.title}</h1>
                <div className="icons">
                    <div className="icons-content">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>5 avaliações!</p>
                </div>
                <p>{product.description}</p>
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