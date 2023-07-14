// Styles
import './styles.css';

// React Hooks
import { useState, useEffect } from 'react';

// React Icons
import { AiOutlineClose, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [ dropdownActive, setDropdownActive ] = useState(false);
    const [ inputActive, setInputActive ] = useState(false);

    const [categories, setCategories] = useState([])

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(r => r.json())
        .then(res => setCategories(res))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <header className="principal-container__header">
                <div className="left-side__header" onMouseEnter={ () => setDropdownActive(true) } onMouseLeave={ () => setDropdownActive(false) }>
                    <AiOutlineMenu /><h3>Categorias</h3>
                </div>

                <div className="mid-side__header">
                    <Link to="/">
                        <h1>Travelly</h1>
                    </Link>
                </div>

                <div className="right-side__header">
                    <AiOutlineSearch onClick={ () => setInputActive(true) } />
                    <AiOutlineShoppingCart />
                </div>

                <div onMouseEnter={ () => setDropdownActive(true) } onMouseLeave={ () => setDropdownActive(false) } className={dropdownActive ? "category-side__header" : "hidden"}>
                    {
                        categories && categories.map((category, index) => {
                            return <div key={index}>
                                <Link to={`/category/${category}`}>
                                    <p>{category}</p>
                                </Link>
                            </div>
                        })
                    }
                </div>
            </header>

            {
                inputActive ?
                (
                    <div className="input-container__header">
                        <input type="text" placeholder="O que procura?"/>
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