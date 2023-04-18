import React from "react";


const MenuItem = ({item}) => {
return (
    <div>
        <h1>{item.title}</h1>
        <h2>{item.price}$</h2>
    </div>  
)
}


export default MenuItem;