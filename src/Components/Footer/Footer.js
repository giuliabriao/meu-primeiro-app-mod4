import React, { Component } from 'react'
import '../Footer/Footer'
import styleFooter from '../Footer/Footer.module.css'

export default class Footer extends Component {
    render() {
        const url = 'https://github.com/giuliabriao';
        return (
                <footer className={styleFooter.footer + " fontePadrao"}>
                        <p className={styleFooter.footerText}>
                            A project made by <a className={styleFooter.linkGithub} href = {url}>Giulia Briao</a>
                        </p>
                </footer>
        )
    }
}
