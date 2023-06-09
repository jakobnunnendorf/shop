"use client"

import React from "react"
import { FiMenu } from "react-icons/fi"
import NavLinks from "./NavLinks"

export default function NavMenu() {
    const [showNavLinks, setShowNavLinks] = React.useState(false)
    function toggleNavLinks() {
        setShowNavLinks((showNavLinks) => !showNavLinks)
    }
    return (
        <nav className="relative flex items-center w-12 h-16">
            <button onClick={() => toggleNavLinks()}>
                <FiMenu size={40} />
            </button>
            {showNavLinks && <NavLinks />}
        </nav>
    )
}
