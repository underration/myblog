import React from 'react';
import Link from 'next/link';

const Post2 = () => {
	
  return (
	<a class="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/post2_detail">
          <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="pos/IMG_7686.jpg" alt="Image Description">
            </img>
          </div>

          <div class="mt-7">
            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
              Low Brass Centerで試奏してきました
          </h3>
            <p class="mt-3 text-gray-800 dark:text-gray-200">
              ローブラスセンターにて、K&HのT2Gを試奏しました。すごく良い楽器でこれは欲しい。
            </p>
            <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              記事を読む
              <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="2" strokelinecap="round" strokelinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </p>
          </div>
        </a>
  )
  };
export default Post2;