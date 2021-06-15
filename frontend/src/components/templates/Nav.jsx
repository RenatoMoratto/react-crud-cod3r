import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar */}
            <Link to="/">
                <i className={`fa fa-${props.icon}`}></i> {props.title}
            </Link>
        </nav>
    </aside>
