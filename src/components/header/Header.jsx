import { NavLink } from "react-router-dom"


const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to={"/"}>Productos</NavLink>
                <NavLink to={"/contact"}>Contacto</NavLink>
            </nav>
            <h2>Este es mi header</h2>
        </header>
    )
}

export default Header