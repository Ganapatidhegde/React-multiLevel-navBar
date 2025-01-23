import MenuItems from "../MenuItems/MenuItems";
import './Dropdown.css'

const Dropdown = ({ submenus, dropdown, depthLevel, items }) => {
    console.log('items', items)
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" :"";
    return (
        <div className="menuItems-container">
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus?.map((submenu, index) => (
                
                    <MenuItems items={submenu} key={index} depthLevel={depthLevel} myClasses='dropdown-menuitems' />
                   
            ))}
        </ul>
        </div>
    );
};

export default Dropdown;