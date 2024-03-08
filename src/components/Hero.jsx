import { useEffect, useState } from 'react'
import heroimage from '../assets/hero.svg'
// eslint-disable-next-line no-unused-vars
import Buttonnew from './Buttonnew'
import pattern from '../assets/patternpad.svg'

const Hero = () => {

    const [state, setState] = useState(false)

    

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])

    return (
        <div className='relative' style={{ backgroundImage: `url('${pattern}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
            <div className='relative'>
                <header>
                    <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    </div>
                </header>
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl'>
                            <h1 className="text-1xl text-gray-600 font-extrabold sm:text-3xl animate-typing overflow-hidden whitespace-nowrap ">
                                Hola Amigo I&apos;m
                            </h1>
                            <h1 className="text-1xl text-gray-900 font-extrabold sm:text-5xl">
                                Yash Kamal Saxena
                            </h1>
                            <p>
                                I am a full stack developer and a competitive programmer. I am a student at Indian Institute of Information Technology, Una.
                            </p>
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Let&apos;s take a tour
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                {/* <Buttonnew></Buttonnew> */}
                            </div>
                        </div>
                        <div className='flex-1 hidden md:block ml-'>
                            {/* Replace with your image */}
                            <img src={heroimage} className="max-w-xl" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero;
