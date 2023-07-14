// Styles
import './styles.css'

// Logo SVG
import logoImg from '../../assets/icons/logo.svg';

export const Footer = () => {

    return (
        <div className="container-footer">
            <div className="submenu">
                <div className="box-footer">
                    <h1>Institucional</h1>
                    <ul>
                        <li>Cupons de desconto</li>
                        <li>Formas de pagamento</li>
                        <li>Atendimento</li>
                        <li>Como Comprar</li>
                        <li>Trocas e devoluções</li>
                        <li>Quem somos</li>
                        <li>Políticas de privacidade</li>
                    </ul>
                </div>
                <div className="box-footer">
                    <h1>Categorias</h1>
                    <ul>
                        <li>30% OFF</li>
                        <li>Novidades</li>
                        <li>Ultimas peças</li>
                        <li>Conjuntos</li>
                        <li>Saias</li>
                        <li>Vestidos</li>
                    </ul>
                </div>
                <div className="box-footer">
                    <h1>Contato</h1>
                    <ul>
                        <li>Rua 3, equina com R-2, lote 4, sala 34, Goiânia/GO</li>
                        <li>(62) 99992-5073</li>
                        <li>(62) 99307-7681</li>
                    </ul>
                </div>
                <div className="box-footer">
                    <h1>Redes Sociais</h1>
                    <ul>
                        <li>Cupons de desconto</li>
                        <li>Formas de pagamento</li>
                        <li>Atendimento</li>
                        <li>Como Comprar</li>
                        <li>Trocas e devoluções</li>
                        <li>Quem somos</li>
                        <li>Políticas de privacidade</li>
                    </ul>
                </div>
            </div>
            <div className="logo">
                <img src={logoImg} id="logo"/>
            </div>
        </div>
    )
}