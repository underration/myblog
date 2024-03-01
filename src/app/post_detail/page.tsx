import Link from 'next/link';
import React from 'react';
import Navbar from '../components/navber';
import Image from 'next/image';
const post = () => {
	return (
		<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
			<div className="max-w-2xl">
				<div className="space-y-5 md:space-y-8">
					<div className="space-y-3">
						<h2 className="text-2xl font-bold md:text-3xl dark:text-white">My new 人権... I mean, instrument</h2>

						<p className="text-lg text-gray-800 dark:text-gray-200">
							新しくT3Yを買いました。もともと楽器ほしいと悩んでいたものの、近年の円安ならびに人件費の高騰を受けて、楽器の値段はもう目を当てられないほどでした。バイト戦士であるけどお金全然足りなくて、
							新品買うのはあきらめました。もともとConn 88h吹いてたから、暗い音の楽器より明るい音色の楽器を探そうとしました。
					とりあえずローブラスセンターに行ってみて、シャイのQシリーズ吹いてみるも、音色が好きになれず断念(いい楽器です)。あとおまけで、shilkeのST20という珍しい楽器が置いてあったので吹いてみると、めちゃめちゃ鳴るけど全く溶け込まない音していて、
					ビッグバンド向けだなあっと思った次第。
						</p>
					</div>

					

					<figure>
						<Image className="w-full object-cover rounded-xl" src="/pos/IMG_7548.jpg" alt="試奏したShiresのQ30GR">
						</Image>
						<figcaption className="mt-3 text-sm text-center text-gray-500">
						試奏したShiresのQ30GR
						</figcaption>
					</figure>
					<p className="text-lg text-gray-800 dark:text-gray-200">そこで、中古楽器でいいのがないか探してみる。メルカリで探してみると、T3Yが出品されていたので、
					これは買いだなあ、とおもい出品者に連絡とってみる。いろいろ質問してみると、2013年に購入というものもめちゃめちゃ綺麗、ラッカーもほぼ剥がれてないということで、購入してみました。
					価格はDACケース込みで31万円、これは非常に買いな価格で大満足、楽器本体も非常にきれいでした。スライドも全然問題なく非常に満足しました。
					</p>
					<figure>
						<Image className="w-full object-cover rounded-xl" src="pos/IMG_7781.jpg" alt="T3Y">
						</Image>
						<figcaption className="mt-3 text-sm text-center text-gray-500">
						T3Y、とてもきれい
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	)
}

export default post;