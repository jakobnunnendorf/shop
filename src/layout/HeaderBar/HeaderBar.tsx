import Image from "next/image"
import { FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi"

export function HeaderBar() {
    return (
        <header className="fixed w-full">
            <div className="navbar bg-teal-50">
                <div className="flex-1">
                    <a className="btn-ghost btn text-xl normal-case">
                        <Image src={"/p2d_logo.png"} width={50} height={50} alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <FiSearch size={28} style={{ stroke: "url(#coastal-mist)" }} />
                    <div className="dropdown-end dropdown">
                        <label tabIndex={0} className="btn-ghost btn-circle btn">
                            <svg width="0" height="0">
                                <linearGradient id="coastal-mist" x1="100%" y1="100%" x2="0%" y2="0%">
                                    <stop stopColor="#0388A6" offset="0%" />
                                    <stop stopColor="#0BADBF" offset="100%" />
                                </linearGradient>
                            </svg>
                            <div className="indicator">
                                <FiShoppingCart size={28} style={{ stroke: "url(#coastal-mist)" }} />
                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">0 Artikel</span>
                                <span className="text-info">Gesamt: 0€</span>
                                <div className="card-actions">
                                    <button className="btn-primary btn-block btn">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-end dropdown">
                        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                            <div className="w-10 rounded-full">
                                <img src="/assets/img/users/user-2.jpg" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
