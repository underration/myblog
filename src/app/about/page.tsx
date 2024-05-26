import Link from 'next/link';
import Image from 'next/image';
const about = () => {
	return (
		<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
			<div className="max-w-2xl mx-auto">
				<div className="space-y-5 md:space-y-8">
					<div className="space-y-3 ">
						<Image src="/pos/lGxw2sIP_400x400.jpg" alt="naoya" width={200} height={200} className="rounded-full mx-auto" />

						<h2 className="text-2xl font-bold md:text-3xl ">About Me</h2>
						<div className="text-xl container">

							My name is Naoya Iwamoto. I am a student at Osaka Metropolitan University.
							I am majoring an informatioin engineering.

							I belong to Osaka Metropolitan University Symphony Orchestra. I play trombonist at <Link href="https://sites.google.com/view/omusym-kouhou/" className="text-blue-600 hover:text-blue-800 transition ">orchestra</Link>.

							<h2 className="text-2xl font-bold md:text-3xl py-4">My skills</h2>
							I can write code in C/C++, Javascript, React, Next.js ,Python, Bootstrap. My English proficiency level is at the B2 CEFR level, as evidenced by my successful completion of the EIKEN Grade Pre-1 exam.
						</div>
						<h2 className="text-2xl font-bold md:text-3xl py-4">My works</h2>

						<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
							<a href="fu-dining">
								<img className="rounded-t-lg" src="/fu-dining.png" alt="Fuダイニング" />
							</a>
							<div className="p-5">
								<a href="fu-dining">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Fu-dining ガチャ</h5>
								</a>
								<p className="mb-3 font-normal text-gray-700 ">中百舌鳥Fuダイニングでガチャをしよう！</p>
								<a href="fu-dining" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 :bg-blue-600 ">
									ページを見る
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
									</svg>
								</a>
							</div>
						</div>
						

					</div>
				</div>
			</div>
		</div >

	)
}

export default about;