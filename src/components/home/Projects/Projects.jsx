import lottie from 'lottie-web';
import { defineElement } from "@lordicon/element";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import styles from './projects.module.css'

defineElement(lottie.loadAnimation);

function Projects() {
    let [isOpen1, setIsOpen1] = useState(false)
    let [isOpen2, setIsOpen2] = useState(false)
    let [isOpen3, setIsOpen3] = useState(false)
    function open1() {
        setIsOpen1(true)
    }

    function close1() {
        setIsOpen1(false)
    }
    function open2() {
        setIsOpen2(true)
    }

    function close2() {
        setIsOpen2(false)
    }
    function open3() {
        setIsOpen3(true)
    }

    function close3() {
        setIsOpen3(false)
    }
    return (
        <>
            <section className='projects px-3 lg:px-12 border-t border-gray-300/25 mb-10 pt-6' id='projects'>
                <h2 className='uppercase text-white text-3xl mt-5 font-bold mb-6 text-center md:text-start'>My Projects</h2>
                <div className="project-content p-5 flex flex-col items-center gap-12">
                    {/* first project */}
                    <div className={`projectBox relative border border-gray-200/25 flex justify-between items-center px-6 py-6 lg:px-12 rounded-2xl lg:flex-row flex-col-reverse ${styles.projectBox}`}>
                        <div className="text text-white lg:pr4 lg:mt-0 mt-3 text-center lg:text-start">
                            <h3 className='font-bold text-3xl lg:text-5xl mb-3'>MegaMart – Responsive Next.js E-commerce Front-End</h3>
                            <p className='mb-2 lg:mr-18 font-sans text-gray-400'>MegaMart is a modern, performance-optimized front-end e-commerce application designed to deliver a seamless shopping experience across devices. Built with Next.js and styled with Bootstrap, the project leverages both server-side rendering (SSR) and static site generation (SSG) to balance SEO needs and fast page loads.</p>
                            <button type="button" onClick={open1} className='bg-transparent rounded-full w-20 h-20 border-2 border-gray-300/25 hover:border-[#16c72e30] duration-300'>
                                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{ width: "70px", height: "70px", transform: "rotate(320deg)" }} />
                            </button>
                            {/* first project modal */}
                            <Dialog open={isOpen1} as="div" className="relative z-10 focus:outline-none" onClose={close1}>
                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                    <div className="flex min-h-full lg:items-center justify-center py-5 px-6 lg:px-16">
                                        <DialogPanel
                                            transition
                                            className="w-full min-w-full max-w-md rounded-xl bg-white/1 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                                        >
                                            <DialogTitle as='div' className="dialog-title flex justify-between">
                                                <h3 className='text-4xl font-bold text-white'>MegaMart – Responsive Next.js E-commerce Front-End</h3>
                                                <div className="h-fit">
                                                    <Button
                                                        className="inline-flex items-center gap-2 rounded-md bg-(--primary) px-3 py-1.5 text-2xl font-semibold text-black shadow-inner shadow-white/10 hover:bg-[#00ff23]"
                                                        onClick={close1}
                                                    >
                                                        X
                                                    </Button>
                                                </div>
                                            </DialogTitle>
                                            <div className="dialog-body flex flex-wrap text-left">
                                                <div className='description lg:sticky h-full float-left w-full lg:w-1/3 lg:pl-12 py-6 lg:px-12 top-0 text-white'>
                                                    <h3 className='font-bold mb-4 text-xl'>Project description</h3>
                                                    <div>
                                                        <h5 className='font-semibold'>Overview:</h5>
                                                        <p className='text-gray-300'>MegaMart is a modern, performance-optimized front-end e-commerce application designed to deliver a seamless shopping experience across devices. Built with Next.js (v14 App Router) and styled with Bootstrap 5, the project leverages both server-side rendering (SSR) and static site generation (SSG) to balance SEO needs and fast page loads.</p>
                                                        <br /><h5 className='font-semibold'>Scope & Objectives:</h5>
                                                        <p className='text-gray-300'>Develop a fully functional, responsive storefront prototype that showcases product discovery, detailed product views, and a persistent shopping cart—all without a backend API.</p>
                                                        <br /><h5 className='font-semibold'>Tech Stack:</h5>
                                                        <ul className='text-gray-300 list-disc ml-3'>
                                                            <li>Framework: Next.js v14 (App Router)</li>
                                                            <li>Styling: Bootstrap 5 & CSS Modules</li>
                                                            <li>State Management: React Context + localStorage</li>
                                                            <li>Components: Swiper.js for carousel, modular React components</li>
                                                            <li>Deployment Ready: Vercel-compatible configuration</li>
                                                        </ul>
                                                        <br /><h5 className='font-semibold'>Key Features:</h5>
                                                        <ul className='text-gray-300 list-disc ml-3'>
                                                            <li>Home & Category Pages</li>
                                                            <li>Auto-rotating Splide.js carousel for promotions</li>
                                                            <li>Dynamically generated category listings at build time</li>
                                                            <li>Product Detail Pages</li>
                                                            <li>Multi-image gallery, full product descriptions, pricing, “Add to Cart” action</li>
                                                            <li>Responsive Design</li>
                                                            <li>Tested on viewports from 320px (mobile) to 1920px (desktop)</li>
                                                            <li>Maintainability: Clean, component-driven codebase with clear folder structure</li>
                                                        </ul>
                                                        <br /><h5 className='font-semibold' >Future Enhancements:</h5>
                                                        <ul className='text-gray-300 list-disc ml-3'>
                                                            <li>API integration (e.g., Stripe payments, user authentication)</li>
                                                            <li>Add search and filtering capabilities</li>
                                                        </ul>
                                                    </div>
                                                    <div className={`skills pt-4`}>
                                                        <h5 className='font-semibold mb-2'>Skills and deliverables</h5>
                                                        <ul className='p-0 flex flex-wrap gap-2'>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>React.js</li>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>NextJS</li>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>Bootstrap</li>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>JavaScript</li>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>CSS</li>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>HTML</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex justify-evenly lg:justify-start lg:inline-flex flex-wrap gap-6 pt-6 mb-6 lg:mb-0'>
                                                        <a href='https://github.com/YoussefHany1/megamart' target='_blank' className='text-white flex items-center rounded-3xl p-1 px-2 border border-(--primary) hover:border-gray-300/25 duration-200'>
                                                            <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="loop" colors="secondary:#16c72e" /> Github Repository
                                                        </a>
                                                        <a href='https://megamart1.vercel.app/' target='_blank' className='text-white flex items-center rounded-3xl p-1 px-2 border border-(--primary) hover:border-gray-300/25 duration-200'>
                                                            <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="loop" delay="500" colors="primary:#16c72e" style={{ transform: "rotate(320deg)" }} /> Live Demo
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='w-full lg:w-2/3 lg:px-12 mt-6'>
                                                    <img src='/screenshots/megamart/1.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                    <img src='/screenshots/megamart/2.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                    <img src='/screenshots/megamart/3.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                    <img src='/screenshots/megamart/4.png' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                    <img src='/screenshots/megamart/5.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                    <img src='/screenshots/megamart/6.png' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                </div>
                                            </div>
                                        </DialogPanel>
                                    </div>
                                </div>
                            </Dialog>
                        </div>
                        <img src={"/screenshots/megamart/1.jpeg"} className='rounded w-full max-w-xl min-w-72' loading="lazy" alt='Front-end for E-commerce website' />
                    </div>
                    {/* second project */}
                    <div className={`projectBox relative border border-gray-200/25 flex justify-between items-center px-6 py-6 lg:px-12 rounded-2xl lg:flex-row flex-col-reverse ${styles.projectBox}`}>
                        <div className="text text-white lg:pr4 lg:mt-0 mt-3 text-center lg:text-start">
                            <h3 className='font-bold text-3xl lg:text-5xl mb-3'>Gaming Zone – Gaming News Aggregator</h3>
                            <p className='mb-2 lg:mr-18 font-sans text-gray-400'>Gaming Zone is a dynamic and responsive web application built with Next.js that aggregates and displays the latest gaming news from multiple trusted sources like IGN, Game Informer, and VG247. Designed for gaming enthusiasts, the platform collects articles via RSS feeds, converts them into structured JSON, and presents them in an engaging and modern UI.</p>
                            <button type="button" onClick={open2} className='bg-transparent rounded-full w-20 h-20 border-2 border-gray-300/25 hover:border-[#16c72e30] duration-300'>
                                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{ width: "70px", height: "70px", transform: "rotate(320deg)" }} />
                            </button>
                            {/* second project modal */}
                            <Dialog open={isOpen2} as="div" className="relative z-10 focus:outline-none" onClose={close2}>
                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                    <div className="flex min-h-full lg:items-center justify-center py-5 px-6 lg:px-16">
                                        <DialogPanel
                                            transition
                                            className="w-full min-w-full max-w-md rounded-xl bg-white/1 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                                        >
                                            <DialogTitle as='div' className="dialog-title flex justify-between">
                                                <h3 className='text-4xl font-bold text-white'>Gaming Zone – Gaming News Aggregator</h3>
                                                <div className="h-fit">
                                                    <Button
                                                        className="inline-flex items-center gap-2 rounded-md bg-(--primary) px-3 py-1.5 text-2xl font-semibold text-black shadow-inner shadow-white/10 hover:bg-[#00ff23]"
                                                        onClick={close2}
                                                    >
                                                        X
                                                    </Button>
                                                </div>
                                            </DialogTitle>
                                            <div className="dialog-body flex flex-wrap text-left">
                                                <div className='description lg:sticky h-full float-left w-full lg:w-1/3 lg:pl-12 py-6 lg:px-12 top-0 text-white'>
                                                    <h3 className='font-bold mb-4 text-xl'>Project description</h3>
                                                    <div>
                                                        <h5 className='font-semibold'>Overview:</h5>
                                                        <p className='text-gray-300'>Gaming Zone is a dynamic and responsive web application built with Next.js that aggregates and displays the latest gaming news from multiple trusted sources like IGN, Game Informer, and VG247. Designed for gaming enthusiasts, the platform collects articles via RSS feeds, converts them into structured JSON, and presents them in an engaging and modern UI.</p>
                                                        <br /><h5 className='font-semibold'>Scope & Objectives:</h5>
                                                        <p className='text-gray-300'>This project delivers a responsive Next.js web app that aggregates gaming news from RSS feeds, converting them into JSON and presenting real-time updates in a fast, user-friendly interface.</p>
                                                        <br /><h5 className='font-semibold'>Tech Stack:</h5>
                                                        <ul className='text-gray-300 list-disc ml-3'>
                                                            <li><strong>Next.js App Router: </strong>for file-based routing and server-side rendering.</li>
                                                            <li><strong>Tailwind CSS: </strong>utility-first styling for responsive UI.</li>
                                                            <li><strong>RSS to JSON Conversion: </strong>server-side fetching and parsing of RSS feeds for structured display.</li>
                                                            <li><strong>Reusable Components: </strong>clean modular architecture with separate components for cards, headers, footers, etc.</li>
                                                            <li><strong>API Handling: </strong>built-in fetch functions to handle multiple RSS sources seamlessly.</li>
                                                        </ul>
                                                        <br /><h5 className='font-semibold'>Key Features:</h5>
                                                        <ul className='text-gray-300 list-disc ml-3'>
                                                            <li><strong>Live News Feed: </strong>Automatically fetches and updates gaming articles from multiple RSS sources.</li>
                                                            <li><strong>Fast Performance: </strong>Uses Next.js App Router for optimized performance, image loading, and SEO.</li>
                                                            <li><strong>Dark Mode Support: </strong>User-friendly experience with support for both light and dark themes.</li>
                                                            <li><strong>Responsive Design: </strong>Fully mobile-compatible layout using Tailwind CSS.</li>
                                                            <li><strong>Category Filtering: </strong>Easily filter articles by source (e.g. VG247, IGN, Saudi Gamer).</li>
                                                            <li><strong>Search Capability: </strong>Quickly find specific games or topics.</li>
                                                            <li><strong>Error Toasts & Alerts: </strong>Real-time toast messages for loading errors or connectivity issues.</li>
                                                        </ul>
                                                        <br /><h5 className='font-semibold' >Future Enhancements:</h5>
                                                        <ul className='text-gray-300 list-disc ml-3'>
                                                            <li>Add AI-powered article summarization for quicker reads.</li>
                                                            <li>Enable user notifications for breaking news.</li>
                                                            <li>Add user accounts and article saving.</li>
                                                            <li>Integrate calendar for upcoming game releases and events.</li>
                                                            <li>Support for multiple languages and regions.</li>
                                                        </ul>
                                                    </div>
                                                    <div className={`skills pt-4 ${styles.skills}`}>
                                                        <h5 className='font-semibold mb-2'>Skills and deliverables</h5>
                                                        <ul className='p-0 flex flex-wrap gap-2'>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>Next.js</li>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>TailwindCSS</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex justify-evenly lg:justify-start lg:inline-flex flex-wrap gap-6 pt-6 mb-6 lg:mb-0'>
                                                        <a href='https://github.com/YoussefHany1/gaming-zone' target='_blank' className='text-white flex items-center rounded-3xl p-1 px-2 border border-(--primary) hover:border-gray-300/25 duration-200'>
                                                            <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="loop" colors="secondary:#16c72e" />Github Repository
                                                        </a>
                                                        <a href='https://gznews.vercel.app/' target='_blank' className='text-white flex items-center rounded-3xl p-1 px-2 border border-(--primary) hover:border-gray-300/25 duration-200'>
                                                            <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="loop" delay="500" colors="primary:#16c72e" style={{ transform: "rotate(320deg)" }} /> Live Demo
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='w-full lg:w-2/3 lg:px-12 mt-6'>
                                                    <img src='/screenshots/gaming-zone/2.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                    <img src='/screenshots/gaming-zone/3.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                    <img src='/screenshots/gaming-zone/4.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                </div>
                                            </div>
                                        </DialogPanel>
                                    </div>
                                </div>
                            </Dialog>
                        </div>
                        <img src={"/screenshots/gaming-zone/1.jpeg"} className='rounded w-full max-w-xl min-w-72' loading="lazy" alt='Gaming News Aggregator Website' />
                    </div>

                    {/* third project*/}
                    <div className={`projectBox relative border border-gray-200/25 flex justify-between items-center px-6 py-6 lg:px-12 rounded-2xl lg:flex-row flex-col-reverse ${styles.projectBox}`}>
                        <div className="text text-white lg:pr4 lg:mt-0 mt-3 text-center lg:text-start">
                            <h3 className='font-bold text-3xl lg:text-5xl mb-3'> Mohid - Smartwatch E-Commerce Landing Page</h3>
                            <p className='mb-2 lg:mr-18 font-sans text-gray-400'>Mohid is a responsive, single-page landing site prototype for an online smartwatch store. Built with Bootstrap and custom CSS, it showcases featured brands, highlights the latest products, includes customer testimonials, and invites visitors to subscribe to a newsletter.</p>
                            <button type="button" onClick={open3} className='bg-transparent rounded-full w-20 h-20 border-2 border-gray-300/25 hover:border-[#16c72e30] duration-300'>
                                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{ width: "70px", height: "70px", transform: "rotate(320deg)" }} />
                            </button>

                            {/* third project modal */}
                            <Dialog open={isOpen3} as="div" className="relative z-10 focus:outline-none" onClose={close3}>
                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                    <div className="flex min-h-full lg:items-center justify-center py-5 px-6 lg:px-16">
                                        <DialogPanel
                                            transition
                                            className="w-full min-w-full max-w-md rounded-xl bg-white/1 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                                        >
                                            <DialogTitle as='div' className="dialog-title flex justify-between">
                                                <h3 className='text-4xl font-bold text-white'>Mohid - Smartwatch E-Commerce Landing Page</h3>
                                                <div className="h-fit">
                                                    <Button
                                                        className="inline-flex items-center gap-2 rounded-md bg-(--primary) px-3 py-1.5 text-2xl font-semibold text-black shadow-inner shadow-white/10 hover:bg-[#00ff23]"
                                                        onClick={close3}
                                                    >
                                                        X
                                                    </Button>
                                                </div>
                                            </DialogTitle>
                                            <div className="dialog-body flex flex-wrap text-left">
                                                <div className='description lg:sticky h-full float-left w-full lg:w-1/3 lg:pl-12 py-6 lg:px-12 top-0 text-white'>
                                                    <h3 className='font-bold mb-4 text-xl'>Project description</h3>
                                                    <div>
                                                        <h5 className='font-semibold'>Overview:</h5>
                                                        <p className='text-gray-300'>Mohid is a responsive, single-page landing site prototype for an online smartwatch store. Built with Bootstrap and custom CSS, it showcases featured brands, highlights the latest products, includes customer testimonials, and invites visitors to subscribe to a newsletter.</p>
                                                        <br /><h5 className='font-semibold'>Scope & Objectives:</h5>
                                                        <p className='text-gray-300'>This project delivers a conversion-focused landing page for smartwatch e-commerce. It emphasizes responsive design, brand highlights, and product presentation while providing a scalable foundation for future integration with real APIs and shopping functionality.</p>
                                                        <br /><h5 className='font-semibold'>Tech Stack:</h5>
                                                        <ul className='text-gray-300 list-disc ml-3'>
                                                            <li><strong>HTML5 & CSS3: </strong>semantic structure and custom styling.</li>
                                                            <li><strong>Bootstrap 5: </strong>responsive grid system, navbar, dropdowns, and components.</li>
                                                            <li><strong>Font Awesome: </strong>clean and modern icons for UI interactions.</li>
                                                            <li><strong>Google Fonts (Poppins): </strong>consistent and modern typography.</li>
                                                        </ul>
                                                        <br /><h5 className='font-semibold'>Key Features:</h5>
                                                        <ul className='text-gray-300 list-disc ml-3'>
                                                            <li><strong>Hero Section: </strong>full-screen banner with search and product highlights.</li>
                                                            <li><strong>Navigation Bar: </strong>responsive menu with dropdowns and action icons.</li>
                                                            <li><strong>Brand Highlights: </strong>showcase of major smartwatch brands like Apple, Xiaomi, and FitBit.</li>
                                                            <li><strong>Latest Products: </strong>product cards with images, ratings, and pricing.</li>
                                                            <li><strong>Customer Testimonials: </strong>carousel of reviews with ratings and avatars.</li>
                                                            <li><strong>Newsletter Subscription: </strong>email signup form with call-to-action.</li>
                                                            <li><strong>Responsive Layout: </strong>optimized for desktop, tablet, and mobile devices.</li>
                                                        </ul>
                                                        <br /><h5 className='font-semibold' >Future Enhancements:</h5>
                                                        <ul className='text-gray-300 list-disc ml-3'>
                                                            <li>Integrate with a back-end API for dynamic product loading.</li>
                                                            <li>Implement real cart and user authentication flows.</li>
                                                            <li>Enhance accessibility (ARIA roles, keyboard navigation).</li>
                                                            <li>Add animations and lazy-loading for performance optimization.</li>
                                                        </ul>
                                                    </div>
                                                    <div className={`skills pt-4 ${styles.skills}`}>
                                                        <h5 className='font-semibold mb-2'>Skills and deliverables</h5>
                                                        <ul className='p-0 flex flex-wrap gap-2'>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>HTML</li>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>CSS</li>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>JavaScript</li>
                                                            <li className='px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200'>Bootstrap</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex justify-evenly lg:justify-start lg:inline-flex flex-wrap gap-6 pt-6 mb-6 lg:mb-0'>
                                                        <a href='https://github.com/YoussefHany1/mohid' target='_blank' className='text-white flex items-center rounded-3xl p-1 px-2 border border-(--primary) hover:border-gray-300/25 duration-200'>
                                                            <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="loop" colors="secondary:#16c72e" /> Github Repository
                                                        </a>
                                                        <a href='https://youssefhany1.github.io/mohid/' target='_blank' className='text-white flex items-center rounded-3xl p-1 px-2 border border-(--primary) hover:border-gray-300/25 duration-200'>
                                                            <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="loop" delay="500" colors="primary:#16c72e" style={{ transform: "rotate(320deg)" }} /> Live Demo
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='w-full lg:w-2/3 lg:px-12 mt-6'>
                                                    <img src='/screenshots/mohid/1.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                    <img src='/screenshots/mohid/2.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                    <img src='/screenshots/mohid/3.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                    <img src='/screenshots/mohid/4.jpeg' className='rounded mb-6' loading="lazy" alt='Screenshot of the project' />
                                                </div>
                                            </div>
                                        </DialogPanel>
                                    </div>
                                </div>
                            </Dialog>
                        </div>
                        <img src={"/screenshots/mohid/1.jpeg"} className='rounded w-full max-w-xl min-w-72' loading="lazy" alt='Smartwatch E-Commerce Front-End' />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects