"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bell, CarFront, Mail, Star } from "lucide-react";
import { useSelector } from "react-redux";
import { isAuthenticated, getUser } from "@/redux/slices/auth/authSlice";

const Header = () => {
    const auth = useSelector(isAuthenticated);
    const user = useSelector(getUser);

    return (
        <header className="bg-[#E8EDFA] w-full z-100 font-lato">
            {/* Top bar */}
            <div className="bg-[#2E3D83] text-white text-sm py-4 px-20 flex justify-between items-center">
                <p className="flex items-center gap-2">
                    Call Us <span>570-694-4002</span>
                </p>
                <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email <span>info@cardeposit.com</span>
                </p>
            </div>

            {/* Main navbar */}
            <div className="flex justify-between items-center py-6 px-20 bg-transparent text-[#2E3D83]">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img src="/assets/logo.png" alt="Car Depot" className="h-8" />
                </div>

                {/* Navigation Links */}
                <nav className="flex gap-6 text-sm">
                    <Link className="hover:text-yellow-500" href="/">
                        Home
                    </Link>
                    <Link className="hover:text-yellow-500" href="/auctions">
                        Car Auction
                    </Link>
                    <Link className="hover:text-yellow-500" href="/sell-car">
                        Sell Your Car
                    </Link>
                    <Link className="hover:text-yellow-500" href="/about-us">
                        About Us
                    </Link>
                    <Link className="hover:text-yellow-500" href="/contact">
                        Contact
                    </Link>
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    {auth ? (
                        // Logged in: show icons + maybe user name
                        <>
                            <Link
                                href="/wishlist"
                                className="text-sm text-[#2E3D83] hover:text-[#F4C23D]"
                            >
                                <Star />
                            </Link>
                            <Link
                                href="/notifications"
                                className="text-sm text-[#2E3D83] hover:text-[#F4C23D]"
                            >
                                <Bell />
                            </Link>
                            <Link
                                href="/profile"
                                className="text-sm text-[#2E3D83] hover:text-[#F4C23D]"
                            >
                                <CarFront />
                            </Link>
                        </>
                    ) : (
                        // Logged out: show sign in/register
                        <>
                            <Link
                                href="/login"
                                className="text-sm text-blue-600 hover:text-yellow-500"
                            >
                                Sign in
                            </Link>
                            <Button
                                variant="primary"
                                className="bg-yellow-500 text-black text-sm hover:bg-yellow-400"
                            >
                                <Link href="/register">Register Now</Link>
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
