import {menu} from "../data/list";
import Menu from "../components/Menu";
import Header from "../components/Header";

function MenuPage() {
  return (
    <div>
        <Header/>
      <Menu menu={menu}/>
      </div>
  )
}

export default MenuPage;
