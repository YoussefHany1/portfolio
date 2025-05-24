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
                <div className="project-box position-relative d-flex justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse">
                    <div className="text text-white ps-lg-4 mt-lg-0 mt-3 text-lg-start text-center">
                        <h3 className='fw-bold fs-1'>Modern E-commerce website</h3>
                        <p className='pb-2'>A clean and responsive e-commerce website designed for a seamless shopping experience. This project features a user-friendly interface, product categories, a search bar, and an interactive shopping cart. Built with modern front-end technologies to ensure speed and accessibility.</p>
                        <button className='bg-transparent rounded-circle '><a href='https://megamart1.vercel.app/' target='_blank' className='d-flex'>
                            <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{width:"70px", height:"70px", transform: "rotate(320deg)"}}></lord-icon></a>
                        </button>
                    </div>
                    <img src={megamart} className='rounded-3 img-fluid' alt='Front-end for E-commerce website' />
                </div>
                <div className="project-box position-relative d-flex flex-lg-row-reverse justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse">
                    <div className="text text-white ps-lg-4 mt-lg-0 mt-3 text-lg-start text-center">
                        <h3 className='fw-bold fs-1'>Smartwatch E-Commerce Front-End</h3>
                        <p className='pb-2'>A sleek, modern front-end design showcasing top smartwatch brands with intuitive navigation and a clean interface. Built for responsiveness and performance, it provides a seamless user experience from quick product discovery to easy checkout.</p>
                        <button className='bg-transparent rounded-circle '><a href='https://youssefhany1.github.io/mohid/' target='_blank' className='d-flex'>
                            <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{width:"70px", height:"70px", transform: "rotate(320deg)"}}></lord-icon></a>
                        </button>
                    </div>
                    <img src={mohid} className='rounded-3 img-fluid' alt='Front-end for E-commerce website' />
                </div>
                <div className="project-box position-relative d-flex justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse">
                    <div className="text text-white ps-lg-4 mt-lg-0 mt-3 text-lg-start text-center">
                        <h3 className='fw-bold fs-1'>Creative & Modern Burger Website Design</h3>
                        <p className='pb-2'>A visually appealing and engaging burger restaurant website designed with a sleek UI, bold typography, and high-quality imagery. This project showcases my css skills.</p>
                        <button className='bg-transparent rounded-circle '><a href='https://youssefhany1.github.io/Burger/' target='_blank' className='d-flex'>
                            <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{width:"70px", height:"70px", transform: "rotate(320deg)"}}></lord-icon></a>
                        </button>
                    </div>
                    <img src={burger} className='rounded-3 img-fluid' alt='Front-end for E-commerce website'/>
                </div>
            </div>
        </section>
        </>
    )
}
export default Projects