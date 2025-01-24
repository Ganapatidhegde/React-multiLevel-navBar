import MenuItems from "../MenuItems/MenuItems";
import './Dropdown.css'

const Dropdown = ({ submenus, dropdown, depthLevel, items }) => {
    console.log('items', items)
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" :"";
    return (
       
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""} ${depthLevel > 1 ? 'secondLevel' : ''}`}>
            {/* <div className="middle-line center"></div> */}
            {submenus?.map((submenu, index) => (
                
                    <MenuItems items={submenu} key={index} depthLevel={depthLevel} myClasses='dropdown-menuitems' />
                   
            ))}
        </ul>
       
    );
};

export default Dropdown;