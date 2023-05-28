import React from "react"
import NameHeader from "./Content/NameHeader"
import Login from "./Content/Login/Login"
import PropTypes from "prop-types"

type LoginFrameProps = {
    handleLogin: () => void
}
export function LoginFrame() {
    return (
        <div className="w-full p-5 md:w-3/5 ">
            <NameHeader />
            <Login />
        </div>
    )
}
