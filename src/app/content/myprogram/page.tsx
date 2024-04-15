import Link from 'next/link';
import React from 'react';
import Navbar from '../../components/navber';

const myprogram = () => {
	return (
		<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
			<div className="max-w-2xl">
				<div className="space-y-5 md:space-y-8">
					<div className="space-y-3">
						<h2 className="text-2xl font-bold md:text-3xl ">GANで自分の楽器の音声を再現してみた</h2>
						<p className="text-xs sm:text-sm text-gray-800">2024/04/08</p>
						<div className="text-lg text-gray-800 ">
						<figure>
						<img className="w-full object-cover rounded-xl" src="/pos/wave-gan.png" alt="GAN">
						</img>
					</figure>
							<div>自分の楽器の音声を再現したいので、GANを利用してみました。GANとは、Generative Adversarial Networkの略で、生成モデルの一つです。生成モデルとは、データを生成するモデルのことで、GANはその中でも、生成モデルの中でも、特に画像生成において優れた性能を発揮するモデルです。今回は画像ではなく、音声を生成したいので、音声生成においてGANを利用することができるWaveGANというモデルを利用しました。WaveGANは、音声生成においてGANを利用するモデルで、音声生成において優れた性能を発揮するモデルです。
							</div>
							<h2 className="text-2xl font-bold md:text-3xl py-2">使用したモデル</h2>
							以下のページを参考にして実装しました。

							<Link className="group block rounded-xl" href="https://qiita.com/zassou65535/items/5a9d5ef44dedea94be8a">
								<div className="aspect-w-16 aspect-h-9">
								</div>
								<h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
									【音声生成+機械学習】ポケモンの鳴き声をWaveGANで生成する
								</h3>
								
							</Link>
							<h2 className="text-2xl font-bold md:text-3xl py-2">感想</h2>
							実際に学習させると、5000回程度学習させると、ノイズから音っぽいなにかに変わり感動した。ただ、音声自体が綺麗ではないので、もう少し学習させてみたいと思う。
						</div>
					</div>





				</div>
			</div>
		</div>
	)
}

export default myprogram;