import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Post2 = () => {
	
  return (
	<a className="group " href="/post2_detail">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="pos/IMG_7686.jpg" alt="Image Description">
            </img>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
              Low Brass Centerで試奏してきました
          </h3>
            <p className="mt-3 text-gray-800 ">
              ローブラスセンターにて、K&HのT2Gを試奏しました。すごく良い楽器でこれは欲しい。
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              記事を読む
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </p>
          </div>
        </a>
  )
  };
export default Post2;