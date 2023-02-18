import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/legacy/image'
import qubit from '../public/qubit-logo.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'

export default function Home() {
  const[darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark': ''}>
      <Head>
        <title>Network 3.0 Docs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
          <section className="min-h-screen">
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons'>Developed by Network 3.0</h1>
              <ul className='flex item-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode (!darkMode)} className='cursor-pointer text-2xl'/>
                </li>
                <li>
                  <a className='bg-gradient-to-r from-cyan-500 to-teal-700 text-white px-4 py-2 rounded-md ml-8' href='#'>Get Token</a>
                </li>
              </ul> 
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
                Network 3.0 Docs
              </h2>
              <h3 className='text-2xl py-2 md:text-3xl'>
                Made by DB
              </h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-5xl mx-auto'>
                <span className='text-teal-500'>Vision</span> : Our vision is to be at the forefront of technological innovation by continuously pushing the boundaries of Research and Development in disruptive technology, creating solutions that shape the future and improve the world.
              </p>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-5xl mx-auto'>
              <span className='text-teal-500'>Mission</span> : Our mission is to drive positive change by researching, developing and implementing technology that promotes sustainability, equality, and well-being for all people on earth and beyond.
              </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className='relative mx-auto bg-gradient-to-t from-gray-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
              <Image  src={qubit} layout='fill' objectFit='cover'/>
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1 pt-10'>
                What is on this page ?
              </h3>
              <p className='text-md py-2 leading-8 text-gray-800'>
                Research and Development on Disruptive Technologies focuses on exploring cutting-edge innovations such as Hyperledger, Smart Contracts, Machine Learning and the overview of Network 3.0 DLT, with the aim of shaping the future of technology.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800'>
                Our efforts are directed towards creating robust, secure and transparent solutions that will revolutionize the way people interact, transact and do business. Our team of experts is dedicated to advancing the field of disruptive technologies, ensuring that the future is built on a foundation of trust, efficiency, and equity. Our work is driven by the desire to create a better tomorrow, where technology serves humanity and advances the world in meaningful ways. 
              </p>
              <p className='text-md py-2 leading-8 text-gray-800'>
                <p className='text-3xl py-1'>
                  Summary
                </p>
                <ul>
                  <li><span className='text-teal-500'>Whitepaper Repositories</span></li>
                  <li><span className='text-teal-500'>Network 3.0 Documentation</span></li>
                  <li><span className='text-teal-500'>Our Events</span></li>
                  <li><span className='text-teal-500'>Our Projects</span></li>
                </ul>
              </p>
            </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={design} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Whitepaper Repositories</h3>
                <p className='py-2'>
                  Since the first 2 versions of our whitepaper was stores as PDF, we are proud to announce that we are migrating to our own platform that will sustain this functionality in a improved way.
                </p>
                <h4 className='py-4 text-teal-600'>Current Versions released:</h4>
                <p className='text-gray-800 py-1'>1.0</p>
                <p className='text-gray-800 py-1'>1.1</p>
                <p className='text-gray-800 py-1'>1.2</p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={code} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Network 3.0 Documentation</h3>
                <p className='py-2'>
                  Our technical documentation will be focused on delivering a complete KB of articles that are designed to help the user better understand and debug future issues with our technology.
                </p>
                <h4 className='py-4 text-teal-600'>Disruptive Tech of interest:</h4>
                <p className='text-gray-800 py-1'>Distributed Ledger Technology</p>
                <p className='text-gray-800 py-1'>Artificial Inteligence</p>
                <p className='text-gray-800 py-1'>Quantum Computing</p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={consulting} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Our Events</h3>
                <p className='py-2'>
                  Why not ? It's a fun time to be alive, we will organize our events based on the relesease we are providing, thus stay tuned and join our discord channel to find out more.
                </p>
                <h4 className='py-4 text-teal-600'>Next Events</h4>
                <p className='text-gray-800 py-1'>Event #1</p>
                <p className='text-gray-800 py-1'>Event #2</p>
                <p className='text-gray-800 py-1'>Event #3</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1 pt-10'>
                Portofolio
              </h3>
              <p className='text-md py-2 leading-8 text-gray-800'>
                Our efforts are directed towards creating robust, secure and transparent solutions that will revolutionize the way people interact, transact and do business. Our team of experts is dedicated to advancing the field of disruptive technologies, ensuring that the future is built on a foundation of trust, efficiency, and equity. Our work is driven by the desire to create a better tomorrow, where technology serves humanity and advances the world in meaningful ways. 
              </p>
            </div>
              <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                <div className='basis-1/3 flex-1'><Image src={web1} className='rounded-lg object-cover' width={'100'} height={'100'} layout='responsive'/></div>
                <div className='basis-1/3 flex-1'><Image src={web2} className='rounded-lg object-cover' width={'100'} height={'100'} layout='responsive'/></div>
                <div className='basis-1/3 flex-1'><Image src={web3} className='rounded-lg object-cover' width={'100'} height={'100'} layout='responsive'/></div>
                <div className='basis-1/3 flex-1'><Image src={web4} className='rounded-lg object-cover' width={'100'} height={'100'} layout='responsive'/></div>
                <div className='basis-1/3 flex-1'><Image src={web5} className='rounded-lg object-cover' width={'100'} height={'100'} layout='responsive'/></div>
                <div className='basis-1/3 flex-1'><Image src={web6} className='rounded-lg object-cover' width={'100'} height={'100'} layout='responsive'/></div>
              </div>
          </section>
      </main>
    </div>
  )
}
