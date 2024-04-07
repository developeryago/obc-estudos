import {Link, Outlet} from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <header>
                <Link to="/" className="logo">REACT STOCK</Link>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/itens">Ítens</Link>
                </nav>
            </header>
            <div>
                <Outlet></Outlet>
            </div>

            <footer>Feito com React Router DOM</footer> 
        </>
    )
}