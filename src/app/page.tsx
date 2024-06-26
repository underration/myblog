import React from 'react';
import Link from 'next/link';
import Post from './components/post';
import Post2 from './components/post2';
import Post3 from './components/post3';
import Post4 from './components/post4';
const Blog = () => {
  return (

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">記事一覧</h2>
        <p className="mt-1 text-gray-600 ">ぼちぼち更新します</p>
      </div>
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <Post4/>
        <Post3/>
        <Post/>
        {/* Card */}
        <Post2/>
        {/* Card */}
      </div>

    </div>
  )
};

export default Blog;
