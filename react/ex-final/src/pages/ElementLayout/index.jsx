import { Link, Outlet } from "react-router-dom";

export default function ElementLayout() {
    return (
        <main>
         <h1>Ítens em Stock</h1>
         <div className="tabs">
            <Link to="/itens" className="tab">Todos os Ítens</Link>
            <Link to="/itens/new" className="tab">Novo Ítem</Link>
         </div>
         <Outlet></Outlet>
        </main>
    )
}