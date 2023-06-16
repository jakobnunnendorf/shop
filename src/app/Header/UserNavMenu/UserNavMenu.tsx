"use client"

import Link from 'next/link'
import React, { useState } from "react"
import { FiUser } from "react-icons/fi"
import UserNavLinks from "./UserNavLinks"

export default function UserNavMenu() {
    return (
        <nav className="relative flex items-center w-12 h-16">
            <Link href='/user'>
                <FiUser size={32} />
            </Link>
        </nav>
    )
}
