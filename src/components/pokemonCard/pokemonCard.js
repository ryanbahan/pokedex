const PokemonCard = ({
    height,
    id,
    img,
    multipliers,
    name,
    num,
    type,
    weaknesses,
    weight,
}) => {
    return (
        <section style={{border: "solid 1px black"}}>
            <p>{ name }</p>
            <img src={img} />
            <p>number: { num }</p>
            <p>type: { type }</p>
            <p>weaknesses: { weaknesses }</p>
            <p>height: { height }</p>
            <p>weight: { weight }</p>
            <p>multipliers: { multipliers }</p>
        </section>
    )
}

export default PokemonCard