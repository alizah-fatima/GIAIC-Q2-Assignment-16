import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Link href={"/#"}><span className="ml-3 text-xl">Studio Blog</span></Link>
        </div>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2025 StudioBlogs 
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 gap-x-2 justify-center sm:justify-start">
        <Link href={"https://www.facebook.com/profile.php?id=61569073806029"}><FaFacebookF /></Link>
        <Link href={"https://www.linkedin.com/in/alizah-fatima-a096952b4/"}><FaLinkedinIn /></Link>
        <Link href={""}><FaTwitter /></Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
