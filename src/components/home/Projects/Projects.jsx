import lottie from 'lottie-web';
import { defineElement } from "@lordicon/element";
import megamart from '../../../assets/megamart.webp';
import mohid from '../../../assets/mohid.webp';
import gamingZone from '/screenshots/gaming-zone/1.jpeg';
import styles from './projects.module.css'
defineElement(lottie.loadAnimation);

function Projects() {
    return (
        <>
            <section className={`projects px-3 px-lg-5 ${styles.projects}`} id='projects'>
                <h2 className='text-uppercase text-white mt-5 fw-bold mb-0 text-center text-md-start'>My Projects</h2>
                <div className="project-content p-5 d-flex flex-column align-items-center gap-5">
                    {/* first project */}
                    <div className={`projectBox position-relative d-flex justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse ${styles.projectBox}`}>
                        <div className="text text-white ps-lg-4 mt-lg-0 mt-3 text-lg-start text-center">
                            <h3 className='fw-bold fs-1'>MegaMart – Responsive Next.js E-commerce Front-End</h3>
                            <p className='pb-2'>MegaMart is a modern, performance-optimized front-end e-commerce application designed to deliver a seamless shopping experience across devices. Built with Next.js and styled with Bootstrap, the project leverages both server-side rendering (SSR) and static site generation (SSG) to balance SEO needs and fast page loads.</p>
                            <button type="button" className='bg-transparent rounded-circle' data-bs-toggle="modal" data-bs-target="#megamart">
                                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{ width: "70px", height: "70px", transform: "rotate(320deg)" }}></lord-icon>
                            </button>
                            {/* first project modal */}
                            <div className="modal fade" id="megamart" tabIndex="-1" aria-labelledby="megamartLabel" aria-hidden="true">
                                <div className={`modal-dialog modal-dialog-centered m-auto ${styles.modalDialog}`}>
                                    <div className={`modalContent bg-dark ${styles.modalContent}`}>
                                        <div className={`modal-header flex-wrap px-5 bg-black text-start ${styles.modalHeader}`}>
                                            <div className='d-flex justify-content-between align-items-center w-100'>
                                                <h2 className="modal-title fs-1 fw-bold text-white" id="megamartLabel">MegaMart – Responsive Next.js E-commerce Front-End</h2>
                                                <button type="button" className="btn-close bg-white m-0 px-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="modal-body row p-0 text-start">
                                            <div className={`description col-12 col-lg-4 ps-lg-5 py-4 px-5 sticky-top ${styles.description}`}>
                                                <h5>Project description</h5>
                                                <p><strong>Overview</strong><br />
                                                    <p>MegaMart is a modern, performance-optimized front-end e-commerce application designed to deliver a seamless shopping experience across devices. Built with Next.js (v14 App Router) and styled with Bootstrap 5, the project leverages both server-side rendering (SSR) and static site generation (SSG) to balance SEO needs and fast page loads.</p>
                                                    <strong>Scope & Objectives</strong><br />
                                                    <p>Develop a fully functional, responsive storefront prototype that showcases product discovery, detailed product views, and a persistent shopping cart—all without a backend API.</p>
                                                    <strong>Tech Stack</strong>
                                                    <ul>
                                                        <li>Framework: Next.js v14 (App Router)</li>
                                                        <li>Styling: Bootstrap 5 & CSS Modules</li>
                                                        <li>State Management: React Context + localStorage</li>
                                                        <li>Components: Swiper.js for carousel, modular React components</li>
                                                        <li>Deployment Ready: Vercel-compatible configuration</li>
                                                    </ul>
                                                    <strong>Key Features:</strong>
                                                    <ul>
                                                        <li>Home & Category Pages</li>
                                                        <li>Auto-rotating Splide.js carousel for promotions</li>
                                                        <li>Dynamically generated category listings at build time</li>
                                                        <li>Product Detail Pages</li>
                                                        <li>Multi-image gallery, full product descriptions, pricing, “Add to Cart” action</li>
                                                        <li>Responsive Design</li>
                                                        <li>Tested on viewports from 320px (mobile) to 1920px (desktop)</li>
                                                        <li>Maintainability: Clean, component-driven codebase with clear folder structure</li>
                                                    </ul>
                                                    Future Enhancements:<br />
                                                    <ul>
                                                        <li>API integration (e.g., Stripe payments, user authentication)</li>
                                                        <li>Enhanced search and filtering capabilities</li>
                                                    </ul>
                                                </p>
                                                <div className={`skills pt-3 ${styles.skills}`}>
                                                    <h5>Skills and deliverables</h5>
                                                    <ul className='list-unstyled d-flex flex-wrap gap-2'>
                                                        <li className='px-3 py-1 rounded-4'>React.js</li>
                                                        <li className='px-3 py-1 rounded-4'>NextJS</li>
                                                        <li className='px-3 py-1 rounded-4'>Bootstrap</li>
                                                        <li className='px-3 py-1 rounded-4'>JavaScript</li>
                                                        <li className='px-3 py-1 rounded-4'>CSS</li>
                                                        <li className='px-3 py-1 rounded-4'>HTML</li>
                                                    </ul>
                                                </div>
                                                <div className={`btn-group flex-wrap gap-4 pt-4 mb-lg-0 mb-4 ${styles.btnGroup}`}>
                                                    <a href='https://github.com/YoussefHany1/megamart' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="hover"></lord-icon> Github Repository
                                                    </a>
                                                    <a href='https://megamart1.vercel.app/' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#fff" style={{ transform: "rotate(320deg)" }}></lord-icon> Live Demo
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={`pics col-12 col-lg-8 px-5 mt-4 ${styles.pics}`}>
                                                <img src='/screenshots/megamart/1.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='/screenshots/megamart/2.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='/screenshots/megamart/3.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='/screenshots/megamart/4.png' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='/screenshots/megamart/5.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='/screenshots/megamart/6.png' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={megamart} className='rounded-3 img-fluid w-100' alt='Front-end for E-commerce website' />
                    </div>
                    {/* second project */}
                    <div className={`projectBox position-relative d-flex justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse ${styles.projectBox}`}>
                        <div className="text text-white ps-lg-4 mt-lg-0 mt-3 text-lg-start text-center">
                            <h3 className='fw-bold fs-1'>Gaming Zone – Gaming News Aggregator</h3>
                            <p className='pb-2'>Gaming Zone is a dynamic and responsive web application built with Next.js that aggregates and displays the latest gaming news from multiple trusted sources like IGN, Game Informer, and VG247. Designed for gaming enthusiasts, the platform collects articles via RSS feeds, converts them into structured JSON, and presents them in an engaging and modern UI.</p>
                            <button className='bg-transparent rounded-circle' data-bs-toggle="modal" data-bs-target="#burger">
                                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{ width: "70px", height: "70px", transform: "rotate(320deg)" }}></lord-icon>
                            </button>
                            {/* second project modal */}
                            <div className="modal fade" id="burger" tabIndex="-1" aria-labelledby="burgerLabel" aria-hidden="true">
                                <div className={`modal-dialog modal-dialog-centered m-auto ${styles.modalDialog}`}>
                                    <div className={`modalContent bg-dark ${styles.modalContent}`}>
                                        <div className={`modal-header flex-wrap px-5 bg-black text-start ${styles.modalHeader}`}>
                                            <div className='d-flex justify-content-between align-items-center w-100'>
                                                <h2 className="modal-title fs-1 fw-bold text-white" id="burgerLabel">Gaming Zone – Gaming News Aggregator</h2>
                                                <button type="button" className="btn-close bg-white px-3 me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="modal-body row p-0 text-start">
                                            <div className={`description col-12 col-lg-4 ps-lg-5 py-4 px-5 sticky-top ${styles.description}`}>
                                                <h5 className='text-white'>Project description</h5>
                                                <p><strong>Overview:</strong><br />
                                                    Gaming Zone is a dynamic and responsive web application built with Next.js that aggregates and displays the latest gaming news from multiple trusted sources like IGN, Game Informer, and VG247. Designed for gaming enthusiasts, the platform collects articles via RSS feeds, converts them into structured JSON, and presents them in an engaging and modern UI.
                                                    <br /><br />
                                                    <strong>Key Features:</strong>
                                                    <ul>
                                                        <li><strong>Live News Feed: </strong>Automatically fetches and updates gaming articles from multiple RSS sources.</li>
                                                        <li><strong>Fast Performance: </strong>Uses Next.js App Router for optimized performance, image loading, and SEO.</li>
                                                        <li><strong>Dark Mode Support: </strong>User-friendly experience with support for both light and dark themes.</li>
                                                        <li><strong>Responsive Design: </strong>Fully mobile-compatible layout using Tailwind CSS.</li>
                                                        <li><strong>Category Filtering: </strong>Easily filter articles by source (e.g. VG247, IGN, Saudi Gamer).</li>
                                                        <li><strong>Search Capability: </strong>Quickly find specific games or topics.</li>
                                                        <li><strong>Error Toasts & Alerts: </strong>Real-time toast messages for loading errors or connectivity issues.</li>
                                                    </ul>
                                                    <strong>Tech Highlights:</strong>
                                                    <ul>
                                                        <li><strong>Next.js App Router</strong> – for file-based routing and server-side rendering.</li>
                                                        <li><strong>Tailwind CSS</strong> – utility-first styling for responsive UI.</li>
                                                        <li><strong>RSS to JSON Conversion</strong> – server-side fetching and parsing of RSS feeds for structured display.</li>
                                                        <li><strong>Reusable Components</strong> – clean modular architecture with separate components for cards, headers, footers, etc.</li>
                                                        <li><strong>API Handling</strong> – built-in fetch functions to handle multiple RSS sources seamlessly.</li>
                                                    </ul>
                                                    <strong>Future Improvements:</strong>
                                                    <ul>
                                                        <li>Add AI-powered article summarization for quicker reads.</li>
                                                        <li>Enable user notifications for breaking news.</li>
                                                        <li>Add user accounts and article saving.</li>
                                                        <li>Integrate calendar for upcoming game releases and events.</li>
                                                        <li>Support for multiple languages and regions.</li>
                                                    </ul>
                                                </p>
                                                <div className={`skills pt-3 ${styles.skills}`}>
                                                    <h5>Skills and deliverables</h5>
                                                    <ul className='list-unstyled d-flex flex-wrap gap-2'>
                                                        <li className='px-3 py-1 rounded-4'>Next.js</li>
                                                        <li className='px-3 py-1 rounded-4'>TailwindCSS</li>
                                                    </ul>
                                                </div>
                                                <div className={`btn-group flex-wrap gap-4 pt-4 mb-lg-0 mb-4 ${styles.btnGroup}`}>
                                                    <a href='https://youssefhany1.github.io/Burger/' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="hover"></lord-icon> Github Repository
                                                    </a>
                                                    <a href='https://github.com/YoussefHany1/Burger' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#fff" style={{ transform: "rotate(320deg)" }}></lord-icon> Live Demo
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={`pics col-12 col-lg-8 px-5 mt-4 ${styles.pics}`}>
                                                <img src='/screenshots/gaming-zone/2.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='/screenshots/gaming-zone/3.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='/screenshots/gaming-zone/4.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={gamingZone} className='rounded-3 img-fluid w-100' alt='Creative & Modern Burger Website Design' />
                    </div>

                    {/* third project*/}
                    <div className={`projectBox position-relative d-flex justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse ${styles.projectBox}`}>
                        <div className="text text-white ps-lg-4 mt-lg-0 mt-3 text-lg-start text-center">
                            <h3 className='fw-bold fs-1'> Mohid Smartwatch E-Commerce Landing Page</h3>
                            <p className='pb-2'>Mohid is a responsive, single-page landing site prototype for an online smartwatch store. Built with Bootstrap and custom CSS, it showcases featured brands, highlights the latest products, includes customer testimonials, and invites visitors to subscribe to a newsletter.</p>
                            <button className='bg-transparent rounded-circle' data-bs-toggle="modal" data-bs-target="#mohid">
                                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{ width: "70px", height: "70px", transform: "rotate(320deg)" }}></lord-icon>
                            </button>

                            {/* third project modal */}
                            <div className="modal fade" id="mohid" tabIndex="-1" aria-labelledby="mohidLabel" aria-hidden="true">
                                <div className={`modal-dialog modal-dialog-centered m-auto ${styles.modalDialog}`}>
                                    <div className={`modalContent bg-dark ${styles.modalContent}`}>
                                        <div className={`modal-header flex-wrap px-5 bg-black text-start ${styles.modalHeader}`}>
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h2 className="modal-title fs-1 fw-bold text-white" id="mohidLabel"> Mohid Smartwatch E-Commerce Landing Page</h2>
                                                <button type="button" className="btn-close bg-white m-0 px-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="modal-body row p-0 text-start">
                                            <div className={`description col-12 col-lg-4 ps-lg-5 py-4 px-5 sticky-top ${styles.description}`}>
                                                <h5 className='text-white'>Project description</h5>
                                                <p><strong>Overview:</strong>
                                                    <p>Mohid is a responsive, single-page landing site prototype for an online smartwatch store. Built with Bootstrap and custom CSS, it showcases featured brands, highlights the latest products, includes customer testimonials, and invites visitors to subscribe to a newsletter.</p>

                                                    <strong> Key Features:</strong><br />

                                                    <strong>Hero Section</strong>
                                                    <ul>
                                                        <li>Full-screen background image with overlay text (“Discover Most Suitable Watches”)</li>
                                                        <li>Search bar for filtering by brand or keyword</li>
                                                        <li>Prominent product imagery (animated watch graphic)</li>
                                                    </ul>
                                                    <strong>Navigation Bar</strong>
                                                    <ul>
                                                        <li>Brand logo and title on the left</li>
                                                        <li>Menu links: Home, Brands (dropdown), Recent Products, Contact, About</li>
                                                        <li>User action icons: Search, Account, Cart</li>
                                                    </ul>
                                                    <strong>Brands Showcase</strong>
                                                    <ul>
                                                        <li>Interactive cards for Apple, Xiaomi, and FitBit</li>
                                                        <li>Brief brand descriptions and logos</li>
                                                    </ul>
                                                    <strong>Latest Products Grid</strong>
                                                    <ul>
                                                        <li>Six product cards with images, titles, star ratings, original & discounted prices</li>
                                                        <li>Hover-activated “Add to Cart” and “Wishlist” icons</li>
                                                        <li>“View More” button for pagination or extended catalog</li>
                                                    </ul>
                                                    <strong>Customer Testimonials</strong>
                                                    <ul>
                                                        <li>Carousel-style reviews with client photos, names, comments, and ratings</li>
                                                        <li>Navigation indicators to switch between testimonials</li>
                                                    </ul>
                                                    <strong>Newsletter Subscription</strong>
                                                    <uL>
                                                        <li>Call-to-action inviting users to subscribe for daily smartwatch guides</li>
                                                        <li>Email input and “Subscribe” button alongside a product image</li>
                                                    </uL>


                                                    <strong>Technology Stack:</strong>
                                                    <ul>
                                                        <li>HTML5 & CSS3: Semantic markup and custom styling</li>
                                                        <li>Bootstrap 5: Grid system, components (navbar, dropdowns, buttons)</li>
                                                        <li>Font Awesome: Iconography for UI controls and ratings</li>
                                                        <li>Google Fonts: Poppins font for modern typography</li>
                                                        <li>Responsive Design: Fluid layouts and media queries for desktop, tablet, and mobile</li>
                                                    </ul>
                                                    <strong>Next Steps:</strong>
                                                    <ul>
                                                        <li>Integrate with a back-end API for dynamic product loading.</li>
                                                        <li>Implement real cart and user authentication flows.</li>
                                                        <li>Enhance accessibility (ARIA roles, keyboard navigation).</li>
                                                        <li>Add animations and lazy-loading for performance optimization.</li>
                                                    </ul>
                                                </p>
                                                <div className={`skills pt-3 ${styles.skills}`}>
                                                    <h5>Skills and deliverables</h5>
                                                    <ul className='list-unstyled d-flex flex-wrap gap-2'>
                                                        <li className='px-3 py-1 rounded-4'>Bootstrap</li>
                                                        <li className='px-3 py-1 rounded-4'>JavaScript</li>
                                                        <li className='px-3 py-1 rounded-4'>CSS</li>
                                                        <li className='px-3 py-1 rounded-4'>HTML</li>
                                                    </ul>
                                                </div>
                                                <div className={`btn-group flex-wrap gap-4 pt-4 mb-lg-0 mb-4 ${styles.btnGroup}`}>
                                                    <a href='https://youssefhany1.github.io/mohid/' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="hover"></lord-icon> Github Repository
                                                    </a>
                                                    <a href='https://github.com/YoussefHany1/mohid' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#fff" style={{ transform: "rotate(320deg)" }}></lord-icon> Live Demo
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={`pics col-12 col-lg-8 px-5 mt-4 ${styles.pics}`}>
                                                <img src='/screenshots/mohid/1.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='/screenshots/mohid/2.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='/screenshots/mohid/3.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='/screenshots/mohid/4.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={mohid} className='rounded-3 img-fluid w-100' alt='Smartwatch E-Commerce Front-End' />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects