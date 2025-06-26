import lottie from 'lottie-web';
import { defineElement } from "@lordicon/element";
import megamart from '../../assets/megamart.webp';
import mohid from '../../assets/mohid.webp';
import burger from '../../assets/burger.webp';
import './projects.css'
defineElement(lottie.loadAnimation);
function Projects() {
    return (
        <>
            <section className="projects px-3 px-lg-5" id='projects'>
                <h2 className='text-uppercase text-white mt-5 fw-bold mb-0 text-center text-md-start'>My Projects</h2>
                <div className="project-content p-5 d-flex flex-column gap-5">
                    {/* first project */}
                    <div className="project-box position-relative d-flex justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse">
                        <div className="text text-white ps-lg-4 mt-lg-0 mt-3 text-lg-start text-center">
                            <h3 className='fw-bold fs-1'>MegaMart – Responsive Next.js E-commerce Front-End</h3>
                            <p className='pb-2'>MegaMart is a modern, performance-optimized front-end e-commerce application designed to deliver a seamless shopping experience across devices. Built with Next.js and styled with Bootstrap, the project leverages both server-side rendering (SSR) and static site generation (SSG) to balance SEO needs and fast page loads.</p>
                            <button type="button" className='bg-transparent rounded-circle' data-bs-toggle="modal" data-bs-target="#megamart">
                                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{ width: "70px", height: "70px", transform: "rotate(320deg)" }}></lord-icon>
                            </button>
                            <div className="modal fade" id="megamart" tabIndex="-1" aria-labelledby="megamartLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-dark">
                                        <div className="modal-header px-5 bg-black">
                                            <h2 className="modal-title fs-1 fw-bold" id="megamartLabel">MegaMart – Responsive Next.js E-commerce Front-End</h2>
                                            <button type="button" className="btn-close bg-white me-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body row p-0 text-lg-start text-center">
                                            <div className="description col-12 col-lg-4 ps-5 pe-5 pe-lg-0 sticky-top p-4">
                                                <h5>Project description.</h5>
                                                <p>Overview<br />
                                                    MegaMart is a modern, performance-optimized front-end e-commerce application designed to deliver a seamless shopping experience across devices. Built with Next.js (v14 App Router) and styled with Bootstrap 5, the project leverages both server-side rendering (SSR) and static site generation (SSG) to balance SEO needs and fast page loads.<br />
                                                    <br />
                                                    🔍 Scope & Objectives<br />
                                                    Goal: Develop a fully functional, responsive storefront prototype that showcases product discovery, detailed product views, and a persistent shopping cart—all without a backend API.<br />
                                                    <br />
                                                    🛠 Tech Stack<br />
                                                    <ul>
                                                        <li>Framework: Next.js v14 (App Router)</li>
                                                        <li>Styling: Bootstrap 5 & CSS Modules</li>
                                                        <li>State Management: React Context + localStorage</li>
                                                        <li>Components: Swiper.js for carousel, modular React components</li>
                                                        <li>Deployment Ready: Vercel-compatible configuration</li>
                                                    </ul>
                                                    ⚙️ Key Features<br />
                                                    <ul>
                                                        <li>Home & Category Pages</li>
                                                        <li>Auto-rotating Splide.js carousel for promotions</li>
                                                        <li>Dynamically generated category listings at build time</li>
                                                        <li>Product Detail Pages</li>
                                                        <li>Multi-image gallery, full product descriptions, pricing, “Add to Cart” action</li>
                                                        {/* <li>Shopping Cart</li> */}
                                                        <li>Responsive Design</li>
                                                        <li>Tested on viewports from 320px (mobile) to 1920px (desktop)</li>
                                                        <li>Maintainability: Clean, component-driven codebase with clear folder structure</li>
                                                        {/* <li>Scalability: Easy to integrate with a headless CMS or REST/GraphQL API in the future</li> */}
                                                    </ul>
                                                    🔮 Future Enhancements:<br />
                                                    <ul>
                                                        <li>API integration (e.g., Stripe payments, user authentication)</li>
                                                        <li>Enhanced search and filtering capabilities</li>
                                                    </ul>
                                                </p>
                                                <div className="skills pt-3">
                                                    <h5>Skills and deliverables</h5>
                                                    <ul className='list-unstyled d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start'>
                                                        <li className='px-3 py-1 rounded-4'>React.js</li>
                                                        <li className='px-3 py-1 rounded-4'>NextJS</li>
                                                        <li className='px-3 py-1 rounded-4'>Bootstrap</li>
                                                        <li className='px-3 py-1 rounded-4'>JavaScript</li>
                                                        <li className='px-3 py-1 rounded-4'>CSS</li>
                                                        <li className='px-3 py-1 rounded-4'>HTML</li>
                                                    </ul>
                                                </div>
                                                <div className="btn-group flex-wrap gap-4 pt-4 mb-lg-0 mb-4">
                                                    <a href='https://github.com/YoussefHany1/megamart' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="hover"></lord-icon> Github Repository
                                                    </a>
                                                    <a href='https://megamart1.vercel.app/' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#fff" style={{ transform: "rotate(320deg)" }}></lord-icon> Live Demo
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pics col-12 col-lg-8 px-5 mt-4">
                                                <img src='../../../public/screenshots/megamart/1.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='../../../public/screenshots/megamart/2.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='../../../public/screenshots/megamart/3.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='../../../public/screenshots/megamart/4.png' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='../../../public/screenshots/megamart/5.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='../../../public/screenshots/megamart/6.png' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={megamart} className='rounded-3 img-fluid' alt='Front-end for E-commerce website' />
                    </div>
                    {/* second project*/}
                    <div className="project-box position-relative d-flex flex-lg-row-reverse justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse">
                        <div className="text text-white ps-lg-4 mt-lg-0 mt-3 text-lg-start text-center">
                            <h3 className='fw-bold fs-1'> Mohid Smartwatch E-Commerce Landing Page</h3>
                            <p className='pb-2'>Mohid is a responsive, single-page landing site prototype for an online smartwatch store. Built with Bootstrap and custom CSS, it showcases featured brands, highlights the latest products, includes customer testimonials, and invites visitors to subscribe to a newsletter.</p>
                            <button className='bg-transparent rounded-circle' data-bs-toggle="modal" data-bs-target="#mohid">
                                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{ width: "70px", height: "70px", transform: "rotate(320deg)" }}></lord-icon>
                            </button>
                            <div className="modal fade" id="mohid" tabIndex="-1" aria-labelledby="mohidLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-dark">
                                        <div className="modal-header px-5 bg-black">
                                            <h2 className="modal-title fs-1 fw-bold text-white" id="mohidLabel"> Mohid Smartwatch E-Commerce Landing Page</h2>
                                            <button type="button" className="btn-close bg-white me-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body row p-0 text-lg-start text-center">
                                            <div className="description col-12 col-lg-4 ps-5 pe-5 pe-lg-0 sticky-top p-4">
                                                <h5 className='text-white'>Project description.</h5>
                                                <p>Overview:<br />
                                                    Mohid is a responsive, single-page landing site prototype for an online smartwatch store. Built with Bootstrap and custom CSS, it showcases featured brands, highlights the latest products, includes customer testimonials, and invites visitors to subscribe to a newsletter.

                                                    Key Features:<br />

                                                    Hero Section
                                                    <ul>
                                                        <li>Full-screen background image with overlay text (“Discover Most Suitable Watches”)</li>
                                                        <li>Search bar for filtering by brand or keyword</li>
                                                        <li>Prominent product imagery (animated watch graphic)</li>
                                                    </ul>
                                                    Navigation Bar
                                                    <ul>
                                                        <li>Brand logo and title on the left</li>
                                                        <li>Menu links: Home, Brands (dropdown), Recent Products, Contact, About</li>
                                                        <li>User action icons: Search, Account, Cart</li>
                                                    </ul>
                                                    Brands Showcase
                                                    <ul>
                                                        <li>Interactive cards for Apple, Xiaomi, and FitBit</li>
                                                        <li>Brief brand descriptions and logos</li>
                                                    </ul>
                                                    Latest Products Grid
                                                    <ul>
                                                        <li>Six product cards with images, titles, star ratings, original & discounted prices</li>
                                                        <li>Hover-activated “Add to Cart” and “Wishlist” icons</li>
                                                        <li>“View More” button for pagination or extended catalog</li>
                                                    </ul>
                                                    Customer Testimonials
                                                    <ul>
                                                        <li>Carousel-style reviews with client photos, names, comments, and ratings</li>
                                                        <li>Navigation indicators to switch between testimonials</li>
                                                    </ul>
                                                    Newsletter Subscription
                                                    <uL>
                                                        <li>Call-to-action inviting users to subscribe for daily smartwatch guides</li>
                                                        <li>Email input and “Subscribe” button alongside a product image</li>
                                                    </uL>
                                                    Footer
                                                    <ul>
                                                        <li>Simple copyright notice</li>
                                                    </ul>


                                                    Technology Stack:
                                                    <ul>
                                                        <li>HTML5 & CSS3: Semantic markup and custom styling</li>
                                                        <li>Bootstrap 5: Grid system, components (navbar, dropdowns, buttons)</li>
                                                        <li>Font Awesome: Iconography for UI controls and ratings</li>
                                                        <li>Google Fonts: Poppins font for modern typography</li>
                                                        <li>Responsive Design: Fluid layouts and media queries for desktop, tablet, and mobile</li>
                                                    </ul>
                                                    Next Steps:
                                                    <ul>
                                                        <li>Integrate with a back-end API for dynamic product loading.</li>
                                                        <li>Implement real cart and user authentication flows.</li>
                                                        <li>Enhance accessibility (ARIA roles, keyboard navigation).</li>
                                                        <li>Add animations and lazy-loading for performance optimization.</li>
                                                    </ul>
                                                </p>
                                                <div className="skills pt-3 text-white">
                                                    <h5>Skills and deliverables</h5>
                                                    <ul className='list-unstyled d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start'>
                                                        <li className='px-3 py-1 rounded-4'>Bootstrap</li>
                                                        <li className='px-3 py-1 rounded-4'>JavaScript</li>
                                                        <li className='px-3 py-1 rounded-4'>CSS</li>
                                                        <li className='px-3 py-1 rounded-4'>HTML</li>
                                                    </ul>
                                                </div>
                                                <div className="btn-group flex-wrap gap-4 pt-4 mb-lg-0 mb-4">
                                                    <a href='https://youssefhany1.github.io/mohid/' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="hover"></lord-icon> Github Repository
                                                    </a>
                                                    <a href='https://github.com/YoussefHany1/mohid' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#fff" style={{ transform: "rotate(320deg)" }}></lord-icon> Live Demo
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pics col-12 col-lg-8 px-5 mt-4">
                                                <img src='../../../public/screenshots/mohid/1.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='../../../public/screenshots/mohid/2.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='../../../public/screenshots/mohid/3.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                                <img src='../../../public/screenshots/mohid/4.jpeg' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={mohid} className='rounded-3 img-fluid' alt='Smartwatch E-Commerce Front-End' />
                    </div>
                    {/* third project */}
                    <div className="project-box position-relative d-flex justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse">
                        <div className="text text-white ps-lg-4 mt-lg-0 mt-3 text-lg-start text-center">
                            <h3 className='fw-bold fs-1'>Burger Restaurant Landing Page</h3>
                            <p className='pb-2'>This project delivers a sleek, modern landing page for a gourmet burger brand. The design uses a dark, moody background to let vibrant burger photography stand out, inviting visitors to “wake up their taste buds” and explore the menu. Built with semantic HTML5, Bootstrap 5, and custom CSS, the page is fully responsive—ensuring an optimized experience across desktop, tablet, and mobile screens.</p>
                            <button className='bg-transparent rounded-circle' data-bs-toggle="modal" data-bs-target="#burger">
                                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{ width: "70px", height: "70px", transform: "rotate(320deg)" }}></lord-icon>
                            </button>
                            <div className="modal fade" id="burger" tabIndex="-1" aria-labelledby="burgerLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-dark">
                                        <div className="modal-header px-5 bg-black">
                                            <h2 className="modal-title fs-1 fw-bold text-white" id="burgerLabel">Burger Restaurant Landing Page</h2>
                                            <button type="button" className="btn-close bg-white me-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body row p-0 text-lg-start text-center">
                                            <div className="description col-12 col-lg-4 ps-5 pe-5 pe-lg-0 sticky-top p-4">
                                                <h5 className='text-white'>Project description.</h5>
                                                <p>Overview:<br />
                                                    This project delivers a sleek, modern landing page for a gourmet burger brand. The design uses a dark, moody background to let vibrant burger photography stand out, inviting visitors to “wake up their taste buds” and explore the menu. Built with semantic HTML5, Bootstrap 5, and custom CSS, the page is fully responsive—ensuring an optimized experience across desktop, tablet, and mobile screens.
                                                    <br /><br />
                                                    Key Features:
                                                    <ul>
                                                        <li>Hero Section:</li>
                                                        <ul>
                                                            <li>Full‐height viewport banner with a bold, appetite-whetting headline</li>
                                                            <li>Subheading that emphasizes quality ingredients and taste</li>
                                                            <li>Prominent “Explore the menu” call-to-action button with hover transition effects</li>
                                                        </ul>
                                                        <li>Image Showcase:</li>
                                                        <ul>
                                                            <li>A row of high-resolution burger shots styled in overlapping “ellipse” frames for a dynamic mosaic effect</li>
                                                            <li>Mobile-friendly scaling so images stack gracefully on smaller devices</li>
                                                        </ul>
                                                        <li>Responsive Layout:</li>
                                                        <ul>
                                                            <li>Leverages Bootstrap’s grid system and utility classes for flexible, multi-device support</li>
                                                            <li>Custom media queries ensure typography and spacing adjust for phones, tablets, and desktops</li>
                                                        </ul>
                                                        <li>Custom Styling:</li>
                                                        <ul>
                                                            <li>Dark background color (CSS variable) for a premium, gourmet feel</li>
                                                            <li>Accent color used on highlights and the CTA button, switching to a warm orange on hover</li>
                                                            <li>Google Fonts (“Montserrat”) for clean, modern typography</li>
                                                        </ul>
                                                    </ul>
                                                    Tech Stack:
                                                    <ul>
                                                        <li>Markup & Styling: HTML5, CSS3 (including CSS variables and nested selectors), Bootstrap 5</li>
                                                        <li>Fonts & Assets: Google Fonts API, custom-prepared PNG imagery</li>
                                                        <li>Responsive Framework: Bootstrap’s grid and utility classes, plus custom media queries</li>
                                                    </ul>
                                                </p>
                                                <div className="skills pt-3 text-white">
                                                    <h5>Skills and deliverables</h5>
                                                    <ul className='list-unstyled d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start'>
                                                        <li className='px-3 py-1 rounded-4'>HTML</li>
                                                        <li className='px-3 py-1 rounded-4'>CSS</li>
                                                        <li className='px-3 py-1 rounded-4'>Bootstrap</li>
                                                    </ul>
                                                </div>
                                                <div className="btn-group flex-wrap gap-4 pt-4 mb-lg-0 mb-4">
                                                    <a href='https://youssefhany1.github.io/Burger/' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="hover"></lord-icon> Github Repository
                                                    </a>
                                                    <a href='https://github.com/YoussefHany1/Burger' target='_blank' className='text-decoration-none text-white d-flex align-items-center border rounded-5 p-1 px-2'>
                                                        <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#fff" style={{ transform: "rotate(320deg)" }}></lord-icon> Live Demo
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pics col-12 col-lg-8 px-5 mt-4">
                                                <img src='../../../public/screenshots/3.png' className='img-fluid rounded-3 mb-4' alt='Screenshot of the project' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={burger} className='rounded-3 img-fluid' alt='Creative & Modern Burger Website Design' />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects