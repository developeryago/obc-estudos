export default function removeGame(props, id) {
    props.setGame(state => state.filter(game => game.id !== id))
}