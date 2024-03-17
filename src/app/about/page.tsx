import Link from 'next/link';
import Image from 'next/image';
const about = () => {
	return (
		<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
			<div className="max-w-2xl mx-auto">
				<div className="space-y-5 md:space-y-8">
					<div className="space-y-3 text-center">
						<h2 className="text-2xl font-bold md:text-3xl">About</h2>
						<img className="w-full object-cover rounded-xl" src="/pos/IMG_7875.jpg" alt="試奏したShiresのQ30GR">
						</img>
						<p className="text-lg text-gray-800">
							楽器歴：７年
						</p>
						<p>
							使用楽器：Khunl and Hoyer T3Y
						</p>
					</div>
				</div>
			</div>
		</div>

	)
}

export default about;