import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/drinks">Drinks</Link>
                        </li>
                        <li>
                            <Link to="/contact">Fale conosco!</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}