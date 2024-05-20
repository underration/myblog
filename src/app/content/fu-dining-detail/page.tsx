import Link from 'next/link';
import React from 'react';
import Navbar from '../../components/navber';

const myprogram = () => {
	return (
		<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
			<div className="max-w-2xl">
				<div className="space-y-5 md:space-y-8">
					<div className="space-y-3">
						<h2 className="text-2xl font-bold md:text-3xl ">fu・diningガチャつくった</h2>
						<p className="text-xs sm:text-sm text-gray-800">2024/05/20</p>
						<div className="text-lg text-gray-800 ">
						中百舌鳥の食堂、いつも並んでいて、それでいてメニューを決められない（あと高すぎる）。
						そこで、500円で食べれるものを知りたいため思い立ったので、
						<Link href="../fu-dining" className="text-blue-600 hover:text-blue-800 transition">食堂ガチャ</Link>
						
						を作ってみた。

						仕組みは簡単で、指定金額以下で食べれるメニューをランダムで選ぶだけ。また、おまけで必須メニューも選べるようにした。
						データは生協のサイトから取得し、TypescriptとNext.jsで実装した。
						<img className="w-full object-cover rounded-xl" src="../fu-dining.png" alt="fu-dining">
						</img>
						<figcaption className="mt-3 text-sm text-center text-gray-500 py-4">
						食堂ガチャ、新しい組み合わせが見つかる
						</figcaption>

						今後の要素としては、栄養価を最適化する機能を追加したいと思っている。
						具体的に目的関数を設定し、それを最適化することで、栄養価を最適化することができる。
						</div>	
						



					</div>
				</div>
			</div>
		</div>
	)
}

export default myprogram;