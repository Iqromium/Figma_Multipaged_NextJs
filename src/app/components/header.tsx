"use client";

import Link from "next/link";
import Image from "next/image";
import { RiKnifeBloodLine } from "react-icons/ri";

function Header() {
    return (
        <div className="w-full bg-red-800">
            {/* Navbar */}
            <div className="h-[80px] flex justify-center items-center border-b-8 border-black">
                <Image src="/images/ye.png" width={60} height={60} alt="headerkaaction" />
                <div className="w-[80%] h-full bg-black flex justify-between items-center">
                    {/* Left side */}
                    <div>
                        <h1 className="text-3xl text-red-600 font-bold">SKULL, SCREAM & SCREEN</h1>
                    </div>

                    {/* Right side */}
                    <div>
                        <ul className="text-red-600 font-semibold flex gap-x-5">
                            <li>
                                <RiKnifeBloodLine className="text-3xl fill-red-300" />
                                <Link className="hover:underline hover:text-2xl" href="/">Home</Link>
                            </li>
                            <li>
                                <RiKnifeBloodLine className="text-3xl fill-red-300" />
                                <Link className="hover:underline hover:text-2xl" href="/about">About</Link>
                            </li>
                            <li>
                                <RiKnifeBloodLine className="text-3xl fill-red-300 ml-5" />
                                <Link className="hover:underline hover:text-2xl" href="/allmovies">HorrorMovies</Link>
                            </li>
                            <li>
                                <RiKnifeBloodLine className="text-3xl fill-red-300" />
                                <Link className="hover:underline hover:text-2xl" href="/toppicks">TopPicks</Link>
                            </li>
                            <li>
                                <RiKnifeBloodLine className="text-3xl fill-red-300" />
                                <Link className="hover:underline hover:text-2xl" href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;