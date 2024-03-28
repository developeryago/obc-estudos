import Header from "./components";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
        <Header/>
        <Outlet></Outlet>
        <footer>Feito com React Router DOM</footer>
        </>
    )
}