import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Post3 = () => {
	
  return (
	<a className="group " href="../content/myprogram">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="pos/wave-gan.png" alt="Wave-GAN">
            </img>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
			GANで自分の楽器の音声を再現してみた
          </h3>
            <div className="mt-3 text-gray-800 ">
			Generative Adversarial Network
            </div>
            <div className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              記事を読む
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </div>
          </div>
        </a>
  )
  };
export default Post3;