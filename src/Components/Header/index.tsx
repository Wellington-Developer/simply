// Styles
import './styles.css';

// React Hooks
import { useState } from 'react';

// React Icons
import { AiOutlineClose, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';

export const Header = () => {
    const [ dropdownActive, setDropdownActive ] = useState(false);
    const [ inputActive, setInputActive ] = useState(false);

    return (
        <>
            <header className="principal-container__header">
                <div className="left-side__header" onMouseEnter={ () => setDropdownActive(true) } onMouseLeave={ () => setDropdownActive(false) }>
                    <AiOutlineMenu /><h3>Categorias</h3>
                </div>

                <div className="mid-side__header">
                    <h1>Travelly</h1>
                </div>

                <div className="right-side__header">
                    <AiOutlineSearch onClick={ () => setInputActive(true) } />
                    <AiOutlineShoppingCart />
                </div>

                <div onMouseEnter={ () => setDropdownActive(true) } onMouseLeave={ () => setDropdownActive(false) } className={dropdownActive ? "category-side__header" : "hidden"}>
                    <a href="#">Viagens Nacionais</a>
                    <a href="#">Viagens Internacionais</a>
                    <a href="#">30% OFF</a>
                </div>
            </header>

            {
                inputActive ?
                (
                    <div className="input-container__header">
                        <input type="text" placeholder="O que procura?" />
                        <AiOutlineClose onClick={ () => setInputActive(false) }/>
                    </div>
                ) :
                (
                    <div></div>
                )
            }
        </>
    )
}