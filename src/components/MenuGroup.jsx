import React from "react";
import MenuItem from "./MenuItem";

const MenuGroup = ({menuGroup}) => {

    const menuItemList = menuGroup.items.map(item => {
        return <MenuItem  key={item.id} item={item}/>
})
    return(
       
        <div>
           
            {menuItemList}
        </div>
    )
}

export default MenuGroup;