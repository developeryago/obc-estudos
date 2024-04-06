import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
        <Header/>
        <hr />
        <Outlet></Outlet>
        <hr />
        <footer>Feito com React Router DOM</footer>
        </>
    )
}