"use client"

import React, { useState } from "react"
import { FiUser } from "react-icons/fi"
import UserNavLinks from "./UserNavLinks"

export default function UserNavMenu() {
    const [showNavLinks, setShowNavLinks] = useState(false)
    function toggleNavLinks() {
        setShowNavLinks((showNavLinks) => !showNavLinks)
    }
    return (
        <nav className="relative flex h-16 w-12 items-center">
            <button onClick={() => toggleNavLinks()}>
                <FiUser size={32} />
            </button>
            {showNavLinks && <UserNavLinks />}
        </nav>
    )
}
