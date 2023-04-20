import React from "react";


const ItemDetail = ({description, imgUrl, onClose}) => {
    return(
        <>  
            <p>{description}</p>
            <img src={imgUrl} alt="item_detail" />
            <button onClick={onClose}>Close</button>
        </>
    )
}
export default ItemDetail;