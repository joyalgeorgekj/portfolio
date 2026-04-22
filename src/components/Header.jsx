import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";

function Header() {
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const [path, setPath] = useState(location.pathname.slice(1));
    const { name } = useSelector((state) => state.data);
    const [origin, setOrigin] = useState('');

    useEffect(() => {
        setPath(location.pathname.slice(1));
    }, [location.pathname]);


      useEffect(() => {
        if (typeof window !== 'undefined' && window.location && window.location.origin) {
          setOrigin(window.location.origin);
        }
      }, []);

    return (
        <header className="sticky top-0 z-30">
            <nav
                className={`flex justify-between items-center py-4 px-8 font-mono dark:bg-gray-800 dark:text-gray-100 bg-gray-50 text-gray-900 backdrop-blur-md mobile:text-base tablet:text-xl`}
            >
                {/* Logo / Home Link */}
                <ul>
                    <li className="cursor-pointer list-none h-7 grid place-items-center font-bold">
                        <Link
                            to="/"
                            className={
                                "text-purple-500 transition duration-300" +
                                (path === "" ? " text-purple-500 underline underline-offset-8" : "")
                            }
                        >
                            {name}
                        </Link>
                    </li>
                </ul>

                {/* Desktop Navigation */}
                {toggle ? (
                    <div className="absolute top-0 right-0 h-screen w-3/4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 pt-16 flex flex-col gap-6 shadow-lg">
                        <Link
                            onClick={() => setToggle(false)}
                            to="/blog"
                            className={
                                "hover:text-purple-500 transition" +
                                (path === "blog" ? " text-purple-500" : "")
                            }
                        >
                            Blog
                        </Link>
                        <Link
                            onClick={() => setToggle(false)}
                            to="/project"
                            className={
                                "hover:text-purple-500 transition" +
                                (path === "project" ? " text-purple-500" : "")
                            }
                        >
                            Project
                        </Link>
                        <Link
                            onClick={() => setToggle(false)}
                            to="/about"
                            className={
                                "hover:text-purple-500 transition" +
                                (path === "about" ? " text-purple-500" : "")
                            }
                        >
                            About
                        </Link>
                        <a
                            href={`${origin}/JoyalGeorgeKJ.pdf`}
                            download={"Joyal George K J.pdf"}
                            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                        >
                            Resume
                        </a>
                        <ThemeToggle />
                    </div>
                ) : (
                    <ul className="hidden laptop:flex items-center justify-center gap-8 text-lg">
                        <li className="cursor-pointer">
                            <Link
                                to="/blog"
                                className={
                                    "hover:text-purple-500 transition duration-300" +
                                    (path === "blog" ? " text-purple-500" : "")
                                }
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link
                                to="/project"
                                className={
                                    "hover:text-purple-500 transition duration-300" +
                                    (path === "project"
                                        ? " text-purple-500"
                                        : "")
                                }
                            >
                                Project
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link
                                to="/about"
                                className={
                                    "hover:text-purple-500 transition duration-300" +
                                    (path === "about" ? " text-purple-500" : "")
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <a
                                href={`${origin}/Joyal_George_K_J-Software_Developer_Web.pdf`}
                                download={"Joyal_George_K_J-Software_Developer_Web.pdf"}
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                            >
                                Resume
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <ThemeToggle />
                        </li>
                    </ul>
                )}

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setToggle(!toggle)}
                    className="laptop:hidden text-2xl z-50 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <i className={`bi bi-${!toggle ? "list" : "x-lg"}`}></i>
                </button>

                {/* Mobile Menu */}
            </nav>
        </header>
    );
}

export default Header;
