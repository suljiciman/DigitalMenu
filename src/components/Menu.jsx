import React from "react";
import MenuGroup from "./MenuGroup";

const Menu = ({menu}) => {

const menuElement = menu.map((menuGroup) => {
    return <MenuGroup key={menuGroup.id} menuGroup={menuGroup}/>
})
    return(
        <div>
            
            {menuElement}
        </div>
    )
}
export default Menu;