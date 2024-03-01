"use client";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	// Function to close the menu
	const closeMenu = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		// Function to handle outside click
		const handleOutsideClick = (event) => {
			// Check if the click is outside the menu
			if (isOpen && !event.target.closest('.menu-container')) {
				closeMenu();
			}
		};

		// Add event listener when the menu is open
		if (isOpen) {
			document.addEventListener('click', handleOutsideClick);
		}

		// Cleanup the event listener when the menu is closed or component is unmounted
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [isOpen]); // Only re-run the effect if isOpen changes

	return (
		<nav className="bg-white text-gray-800 font-medium">
			<div className="max-w-full mx-auto px-4 border-b-2">
				<div className="flex justify-between">
					{/* Logo */}
					<div className="flex space-x-4">
						<a href="/" className="flex items-center py-5 px-2 text-gray-800">
							<span className="font-bold">Posaune Dairy</span>
						</a>
					</div>
					{/* Menu items for large screens */}
					<div className="hidden md:flex items-center space-x-1">
						<a href="/" className="py-5 px-3 hover:opacity-40 transition">Home</a>
						<a href="/about" className="py-5 px-3 hover:opacity-40 transition">About</a>
						<a href="/contact" className="py-5 px-3 hover:opacity-40 transition">Contact</a>
					</div>
					{/* Hamburger icon */}
					<div className="md:hidden flex items-center">
						<button onClick={() => setIsOpen(!isOpen)}>
							{/* SVG code for the icon */}
							<svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
								<path d={"M4 6h16M4 12h16m-7 6h7"} />
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* Mobile menu items */}
			<div className={`md:hidden fixed inset-y-0 right-0 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50 menu-container`}>
				{/* Overlay background */}
				<div className={`absolute inset-0 bg-black opacity-50 ${isOpen ? "block" : "hidden"}`} onClick={closeMenu}></div>
				{/* Menu */}
				<div className="relative bg-white w-64 min-h-full shadow-xl py-3">
					<a href="/" className="block py-2 px-4 text-sm hover:bg-gray-100 hover:opacity-40 transition">Home</a>
					<a href="/about" className="block py-2 px-4 text-sm hover:bg-gray-100 hover:opacity-40 transition">About</a>
					<a href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-100 hover:opacity-40 transition">Contact</a>
				</div>
			</div>
		</nav>
	);
}