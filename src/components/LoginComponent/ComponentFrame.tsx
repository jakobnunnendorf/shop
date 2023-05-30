import React from "react"
import PropTypes from "prop-types"
import { FaLock, FaUser } from "react-icons/fa"
import { LoginFrame } from "./LoginContainer/LoginFrame"
import { SignupContainer } from "./SignupContainer/SignupContainer"

export const ComponentFrame = () => (
    <div className="mb-36 flex h-fit w-full flex-col-reverse rounded-2xl bg-white shadow-2xl md:flex-row lg:max-w-4xl">
        {/* container for login/signup component */}
        <LoginFrame />
        <SignupContainer />
    </div>
)
