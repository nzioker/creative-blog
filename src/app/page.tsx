import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Jumbotron */}
      <div className="container mx-auto justify-center">
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Welcome to the CreativeBlog
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Here at CreativeBlog, {" we're "} all about exploring the
              possibilities
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Our most viewed blogs below
              </a>
            </div>
          </div>
        </section>

        {/* Horizontal Card  */}

        <div className="grid grid-cols-3">
          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded overflow-hidden">
                <Image
                  src="/img/image2.jpg"
                  height={300}
                  width={300}
                  alt="image2"
                  className="w-full"
                />
              </div>
              <h5 className="text-2xl">Five places you have to visit</h5>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                unde provident, laboriosam, ea sapiente esse itaque excepturi
                corporis voluptas temporibus officia molestiae. Ratione eius
                totam ab culpa, magnam ex molestias!
              </p>
              <Link href="#">Read More</Link>
            </div>
          </div>

          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded overflow-hidden">
                <Image
                  src="/img/image2.jpg"
                  height={300}
                  width={300}
                  alt="image2"
                  className="w-full"
                />
              </div>
              <h5 className="text-2xl">Five places you have to visit</h5>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                unde provident, laboriosam, ea sapiente esse itaque excepturi
                corporis voluptas temporibus officia molestiae. Ratione eius
                totam ab culpa, magnam ex molestias!
              </p>
              <Link href="#">Read More</Link>
            </div>
          </div>

          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded overflow-hidden">
                <Image
                  src="/img/image2.jpg"
                  height={300}
                  width={300}
                  alt="image2"
                  className="w-full"
                />
              </div>
              <h5 className="text-2xl">Five places you have to visit</h5>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                unde provident, laboriosam, ea sapiente esse itaque excepturi
                corporis voluptas temporibus officia molestiae. Ratione eius
                totam ab culpa, magnam ex molestias!
              </p>
              <Link href="#">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
