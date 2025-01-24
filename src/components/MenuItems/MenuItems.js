import { useState, useEffect, useRef } from "react";
import Dropdown from '../Dropdown/Dropdown';
import './MenuItems.css'


const MenuItems = ({ items, depthLevel, myClasses }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);

            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = (e, ref) => {

        setDropdown(true);
    };

    const onMouseLeave = (e) => {
        setDropdown(false);
    };
    const renderToggleArrow = (opened, level) => {
        if (level === 0) {
            return opened ? <span>&uarr;</span> : <span>&darr;</span>
        }
    }
    return (
        <div className={`${depthLevel > 0 ? "li-container" : undefined}`}>
            <li onMouseEnter={(e) => { onMouseEnter(e, ref) }}
                onMouseLeave={onMouseLeave} className={`menu-items ${myClasses}`} ref={ref}

            >
                <div className="items-title">
                    {items.submenu ? (
                        <button type="button" aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                            className={`${myClasses} ${dropdown ? 'active' : "inActive"}`}>
                            {items.title} {' '}
                            {renderToggleArrow(dropdown, depthLevel)}
                        </button>
                    ) : (
                        <a className="" href="/#">{items.title}</a>
                    )}
                </div>
                <div className={depthLevel === 0 && dropdown && items.submenu ? "banner" : ''}>
                    {items.submenu &&
                        <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} items={items} />
                    }
                </div>


            </li>
        </div>
    );
};

export default MenuItems;