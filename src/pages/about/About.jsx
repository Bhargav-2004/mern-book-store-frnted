import React from 'react'
import { BsCloudArrowUp } from 'react-icons/bs';
import { HiLockClosed, HiServer } from "react-icons/hi";

const About = () => {
  return (
    <div className='mt-20'>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              “Thanks to Bookshop, there is no reason to buy books on Amazon anymore.” — Inside Hook
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://media.istockphoto.com/id/1473743903/vector/buying-books-in-shop.jpg?s=612x612&w=0&k=20&c=wuvpLGPsZmhc1EcNxgqDc3pLoL38TgyRtZVtOeHP8UY="
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              OUR PHILOSOPHY

Some people like to read on a screen. Other people need the variety and artistry, the sight, smell, and feel of actual books.They love seeing them on their shelves; they love having shelves for them.

They love taking them along when they leave the house, and stacking them by their bedsides. They love finding old letters and bookmarks in them. They like remembering where they bought them or who they received them from.

They want to read in a way that offers a rich experience, more than the words only: the full offering of a book. They are particular about covers, they want to surround themselves with the poetry of good design.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BsCloudArrowUp className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900"></strong> Book store application works to connect readers with independent booksellers all over the world.
‍We believe local bookstores are essential community hubs that foster culture, curiosity, and a love of reading, and we're committed to helping them thrive.

Every purchase on the site financially supports independent bookstores. Our platform gives independent bookstores tools to compete online and financial support to help them maintain their presence in local communities.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiLockClosed className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> SSL (Secure Socket Layer) certificates are digital certificates that authenticate a website's identity and enable an encrypted connection. This technology ensures that all data transferred between the web server and browser remains private and secure.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiServer className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Database backups are copies of data stored in a database that can be used to restore the original after a data loss event. Regular backups are essential for protecting data integrity and ensuring business continuity.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
              At bookstore application , we embrace serverless architecture to deliver a seamless and efficient experience for our users. Here’s how:

Automatic Scaling: Our applications automatically adjust to handle increased or decreased demand, providing consistent performance without downtime.
Enhanced Security: By leveraging serverless architecture, we benefit from built-in security features and updates provided by our cloud provider, ensuring a secure environment for your data.
Focus on Innovation: With serverless, our developers can concentrate on innovation and improving user experience, rather than managing servers and infrastructure.
Eco-Friendly: Serverless computing reduces energy consumption by efficiently using resources only when needed, contributing to a more sustainable environment.
Commitment to Excellence:
Our commitment to using cutting-edge technology like serverless architecture underscores our dedication to providing the best possible service to our users. Whether you’re browsing our site or using our services, you can trust that we are leveraging the latest advancements to enhance your experience.


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About