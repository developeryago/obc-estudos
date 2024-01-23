export default function Game({title, cover, onRemove}) {
    return (
        <div className="games">
          <div key={id}>
            <img src={cover} alt="" />
            <div>
              <h2>{title}</h2>
              <button
              onClick={onRemove}>Remover</button>
            </div>
          </div>
      </div>
    )
}