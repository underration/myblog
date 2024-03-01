import React from 'react';

const Footer = () => {
	return (
		<footer className="relative w-full h-16 p-16 bg-white mt-8">
			<div className="max-w-screen-xl mx-auto">
				<hr className="my-4 border-gray-200 dark:border-gray-700" />
				<span className="block text-sm text-gray-500 text-center dark:text-gray-400">
					© 2024 <a href="https://twitter.com/_roru_roru" className="hover:underline">_roru_roru</a>. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
}
export default Footer;