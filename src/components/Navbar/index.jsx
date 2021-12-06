import "./styles.css"

import {
    NavLink
} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                    *＊✿❀ Paradise Cafe ❀✿＊*
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}