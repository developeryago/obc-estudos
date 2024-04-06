import products from "../database.json"


export default function loaderProduct({ params}) {
    const product = products.find(p => p.id === +params.productId)

    return product
}