'use client'

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Main = ({ data }: { data: Blog }) => {

  return (
    <div
    className="h-full border-2 border-gray-100 border-opacity-60 rounded-lg mb-10 hover:shadow-xl overflow-hidden shadow-lg"
    >
      <Image
        className="w-full h-48 object-cover object-center"
        src={urlFor(data.image).url()}
        alt={data.title}
        width={800}
        height={192}
      />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          CATEGORY
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          {data.title}
        </h1>
        <p className="leading-relaxed mb-3 text-sm text-gray-700 line-clamp-3">
          {data.content}
        </p>
        <div className="flex items-center flex-wrap">
          <Link href={`/blog/${data.slug}`} className="text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
