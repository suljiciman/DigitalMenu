import React,{ useState } from "react";
import ItemDetail from "./ItemDetail";



const MenuItem = ({item}) => {
    const [showItemDetail,setShowItemDetail] = useState(false)
    const showDetailHandler = () => {
        setShowItemDetail(true)
    }
    const closeItemDetailHandler = () => {
        setShowItemDetail(false)
    }
return (
    <div>
        {showItemDetail && <ItemDetail description={item.description} onClose={closeItemDetailHandler} imgUrl={item.imgUrl}/>}
        <button onClick={showDetailHandler} onClose={closeItemDetailHandler}>
        <h1>{item.title}</h1>
        <h1>{item.price} KM</h1>
        <h3>{item.ingredients}</h3>
        </button>
    </div>  
)
}


export default MenuItem;