import Link from 'next/link';
import React from 'react';
import Navbar from '../components/navber';
const post = () => {
	return (
		<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
			<div className="max-w-2xl">
				<div className="space-y-5 md:space-y-8">
					<div className="space-y-3">
						<h2 className="text-2xl font-bold md:text-3xl dark:text-white">Low Brass Centerで試奏してきました</h2>
						
						<p className="text-lg text-gray-800 dark:text-gray-200">
							K&H T2Gとcourtios legend 440を試奏しました。T2Gは非常に良い楽器で、音色も非常に良かったです。ただ、値段が高いので、購入は見送りました。courtios legend 440は、bachみたいで気に入らないので購入は見送りました。
						</p>
					</div>

					

					<figure>
						<img className="w-full object-cover rounded-xl" src="/pos/IMG_7686.jpg" alt="T2G">
						</img>
						<figcaption className="mt-3 text-sm text-center text-gray-500">
							試奏したT2G、非常に良い楽器だったが60万円、高いね
						</figcaption>
					</figure>
					<p className="text-lg text-gray-800 dark:text-gray-200">
						
					</p>
					
				</div>
			</div>
		</div>
	)
}

export default post;