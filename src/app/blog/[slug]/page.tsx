import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import CommentBox from "@/components/comment";

export default async function BlogPage ({params:{slug}}:{params:{slug:string}}) {
  const query = `*[_type == 'blog' && slug.current == "${slug}"] 
  {title, content, image, description, quote}[0]`

  const data = await client.fetch (query)

  return (
    <section className="text-gray-600 body-font lg:mx-64">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold -mt-12 text-gray-900">
          {data.title}
        </h1>
        <p className="text-gray-700 text-lg">
          {data.content}
        </p>
        <Image
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3 mb-5 mt-8 object-cover object-center rounded"
          alt={data.title}
          src={urlFor(data.image).url()}
          width={1600}
          height={900}
        />

        <div className="text-left lg:w-2/3 w-full mt-8">
          <section className="mb-8 leading-relaxed">
           <PortableText value={data.description} />
          </section>
        </div>
      </div>

      <section className="text-gray-600 body-font -mt-32">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <p className="leading-relaxed text-lg">
              {data.quote}
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
          </div>
        </div>
      </section>

      <div className="px-2 -mt-16 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={"/author.jpg"}
          alt="author"
          width={150}
          height={150}
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1 mt-4">
          <h3>Alizah Fatima</h3>
          <p className="italic text-xs xs:text-sm sm:text-base dark:text-light">
            Web Developer | Content Writer | Work on Front-end UI/UX | Business
            Management Student
          </p>
        </div>
      </div>

      <div>
        <CommentBox />
      </div>

    </section>
  );
};


