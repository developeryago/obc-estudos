import StarWarsPoster from "../../public/img01.jpg"

export default function Card({poster, title}) {
    return <div className="card">
                <img src={poster} alt="Poster: Star Wars (1977)"/>

                <div className="container-txt">
                    <div className="container">
                        <h1>{title}</h1>
                    </div>
                    <div className="container">
                        <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Esse clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                    </div>
                    <div className="container">
                        <button>Comprar agora</button>
                    </div>
                </div>
            </div>
}