import React, { Component } from 'react'
import '../Footer/Footer'

export default class Footer extends Component {
    render() {
        const url = 'https://github.com/giuliabriao';
        return (
                <footer className="footer">
                        <p className="footerText">
                            A project made by <a className="linkGithub" href = {url}>Giulia Briao</a>
                        </p>
                </footer>
        )
    }
}
