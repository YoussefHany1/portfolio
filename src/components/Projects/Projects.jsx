import './projects.css'
import lottie from 'lottie-web';
import { defineElement } from "@lordicon/element";
import '/src/assets/megamart.webp'
import '/src/assets/mohid.webp'
defineElement(lottie.loadAnimation);
function Projects() {
    return (
        <>
        <section className="projects px-3 px-lg-5">
            <h2 className='text-uppercase text-white mt-5 fw-bold mb-0 text-center text-md-start'>My Projects</h2>
            <div className="project-content p-5 d-flex flex-column gap-5">
                <div className="project-box d-flex justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse">
                    <div className="text text-white ps-3 mt-lg-0 mt-3">
                        <h3 className='fw-bold fs-1'>Front-end for E-commerce website</h3>
                        <p className='pb-2'>Design and implementation of front-end interfaces for an e-commerce website</p>
                        <button className='bg-transparent text-white rounded-circle '><a href='' target='_blank' className='d-flex'>
                            <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{width:"70px", height:"70px", transform: "rotate(320deg)"}}></lord-icon></a>
                        </button>
                    </div>
                    <img src='/src/assets/megamart.webp' className='rounded-3 img-fluid'/>
                </div>
                <div className="project-box d-flex flex-row-reverse justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse">
                    <div className="text text-white ps-3 mt-lg-0 mt-3">
                        <h3 className='fw-bold fs-1'>Front-end for E-commerce website</h3>
                        <p className='pb-2'>Design and implementation of front-end interfaces for an e-commerce website</p>
                        <button className='bg-transparent text-white rounded-circle '><a href='' target='_blank' className='d-flex'>
                            <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{width:"70px", height:"70px", transform: "rotate(320deg)"}}></lord-icon></a>
                        </button>
                    </div>
                    <img src='/src/assets/mohid.webp' className='rounded-3 img-fluid' />
                </div>
                <div className="project-box d-flex justify-content-between align-items-center p-4 rounded-3 flex-lg-row flex-column-reverse">
                    <div className="text text-white ps-3 mt-lg-0 mt-3">
                        <h3 className='fw-bold fs-1'>Front-end for E-commerce website</h3>
                        <p className='pb-2'>Design and implementation of front-end interfaces for an e-commerce website</p>
                        <button className='bg-transparent text-white rounded-circle '><a href='' target='_blank' className='d-flex'>
                            <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" colors="primary:#16c72e" style={{width:"70px", height:"70px", transform: "rotate(320deg)"}}></lord-icon></a>
                        </button>
                    </div>
                    <img src='/src/assets/megamart.webp' className='rounded-3 img-fluid' />
                </div>
            </div>
        </section>
        </>
    )
}
export default Projects