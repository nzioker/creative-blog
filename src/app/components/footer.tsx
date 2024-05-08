import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image
                src="/img/logo.png"
                width={50}
                height={50}
                alt="Creative Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                CreativeBlog
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 m-4"
                  aria-current="page">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 m-4"
                  aria-current="page">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 m-4"
                  aria-current="page">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="#" className="hover:underline">
              CreativeBlog™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
