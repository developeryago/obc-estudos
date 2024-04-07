import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import ElementLayout from "./pages/ElementLayout";
import ListItens from "./pages/ListItens";
import CreateItem from "./pages/CreateItem";
import ShowItem from "./pages/ShowItem";
import UpdateItem from "./pages/UpdateItem";

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children: [
        {index: true, element: <Home/>},
        {path: "itens",
        element: <ElementLayout/>,
        children: [
            {index: true, element: <ListItens/>},
            { path: "new", element: <CreateItem/>},
            {path: ":id", element: <ShowItem/>},
            {path: ":id/update", element: <UpdateItem/>},
            ]
        }
    ]
}])

export default router