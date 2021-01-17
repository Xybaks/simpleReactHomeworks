import React, {useState} from "react";
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    const [menuFilter, setMenuFilter] = useState<boolean>(false)
    const onClick = () => {
        setMenuFilter(!menuFilter)
    }
    return (
        <div>
            <div className={menuFilter ? s.fullHeader : s.notFullHeader}>
                <div className={s.header}>
                    <NavLink className={s.links} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                    <NavLink className={s.links} to={PATH.JUNIOR}>Junior</NavLink>
                    <NavLink className={s.links} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
                </div>
            </div>
            <SuperButton red={true}
                         onClick={onClick}><h2>Navigation</h2></SuperButton></div>
    );
}

export default Header;
