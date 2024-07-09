import { Link, Toolbar } from '@mui/material'
import React from 'react'

export default function NewFooter() {
  return (
    <footer class="normal-foo">
        <Toolbar class="footer-body">
            <Toolbar class="info">
                <Toolbar class="image">
                    <img src="./img/logo_matecat_small.svg"/>
                </Toolbar>
                <Toolbar class="description">Matecat is a free and open source online CAT tool. It’s free for translation companies, translators and enterprise users.</Toolbar>
            </Toolbar>
            <Toolbar class="side-info">
                <Toolbar class="item">
                    <Link href="#" target="_blank" rel="noreferrer">Terms of service</Link>
                </Toolbar>
                <Toolbar class="item">
                    <Link href="#" target="_blank" rel="noreferrer">Open Source</Link>
                </Toolbar>
                <Toolbar class="item">
                    <Link href="/api/docs" target="_blank">API</Link>
                </Toolbar>
                <Toolbar class="item">
                    <Link href="mailto:" class="email-link" rel="noreferrer" target="_blank">Contact us</Link>
                </Toolbar>
            </Toolbar>
            <Toolbar class="footer-logo">
                <Link href="#" target="_blank">
                    <img src="./img//matecat-logo-translated.svg" width="130"/>
                </Link>
            </Toolbar>
        </Toolbar>
    </footer>
  )
}

