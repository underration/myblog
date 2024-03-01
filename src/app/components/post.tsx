import React from 'react';
import Link from 'next/link';

const Post = () => {
	
  return (
    <a className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="post_detail">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/pos/IMG_7781.jpg" alt="新しく買った中古楽器T3Y" />
        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900"></span>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          My new 人権... I mean, new instrument
        </h3>
        <p className="mt-3 text-gray-800 dark:text-gray-200">
          新しくT3Yを買いました。なお中古の模様。
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          記事を読む
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </p>
      </div>
    </a>
  )
  };
export default Post;