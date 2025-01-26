import Hero from '@/components/hero';
import Main from './blogs/page';
import { client } from '@/sanity/lib/client';
import React from 'react';

const Home = async() => {
     const query = `*[_type == 'blog'] | order(_updateAt asc){
     title, image, content, 
     "slug": slug.current
     }`;

const data: Blog[] = await client.fetch(query);

  return (
    <div>
      <Hero />
      <h2 className="text-3xl text-blue-950 font-semibold mt-4 text-center">Trending Blogs</h2> 
      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-44 mt-12'>
      {data.map((data: Blog) => (
        <Main data={data} key={data.slug} />
      ))}
      </div>
    </div>
  )
}

export default Home;