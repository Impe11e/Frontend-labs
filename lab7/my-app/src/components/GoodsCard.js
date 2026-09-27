
function GoodsCard(props) {
    return (
        <div className="goods-card">
            <img src={props.photo} alt={props.name} className="goods-photo" />
            <h4 className="goods-name">{props.name}</h4>
            <p className="goods-price">{props.price} грн</p>
        </div>
    )
}

export default GoodsCard