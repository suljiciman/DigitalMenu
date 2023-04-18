import React from "react";


const MenuItem = ({item}) => {
return (
    <div>
        <h1>{item.title}</h1>
        <h1>{item.price} KM</h1>
        <h3>{item.ingredients}</h3>
    </div>  
)
}


export default MenuItem;