import { Link, useParams } from "react-router-dom";
export default function Product() {
    const { productId} = useParams()

   
    if (!product) {
        return <h2>Ops.. esse produto não foi encontrado</h2>
    }
    return (
        <section>
        <Link to="/products"><button>Voltar</button></Link>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>R$ {product.price}</p>
        <button>Comprar</button>
        </section>
    )
}