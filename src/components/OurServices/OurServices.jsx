import './ourServices.css'
import lottie from 'lottie-web';
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation);

function OurServices() {

    return (
        <>
        <section className='our-services px-3 px-lg-5 '>
            <h2 className='text-uppercase text-white mt-5 fw-bold mb-0 text-center text-md-start'>Our Services</h2>
            <div className="services d-flex flex-wrap p-5">
                <div className="box col text-white mx-3 p-4 text-center rounded-3 mb-5 mb-md-0">
                    <lord-icon src="https://cdn.lordicon.com/jfwzwlls.json" trigger="loop" delay="500" colors="primary:#16c72e" style={{width: "100px", height: "100px"}}></lord-icon>
                    <h3 className='fw-bold'>Performance Optimization</h3>
                    <p>Ensure websites are fast and efficient through code optimization and best practices.</p>
                </div>
                <div className="box col text-white mx-3 p-4 text-center rounded-3 mb-5 mb-md-0">
                    <lord-icon src="https://cdn.lordicon.com/trkmrggx.json" trigger="loop" delay="1000" colors="primary:#16c72e" style={{width: "100px", height: "100px"}}></lord-icon>
                    <h3 className='fw-bold'>API Integration</h3>
                    <p>Connect front-end interfaces with back-end services and display data in engaging formats.</p>
                </div>
                <div className="box col text-white mx-3 p-4 text-center rounded-3 mb-5 mb-md-0">
                    <lord-icon src="https://cdn.lordicon.com/baxknfaw.json" trigger="loop" delay="1000" colors="primary:#16c72e" style={{width: "100px", height: "100px"}}></lord-icon>
                    <h3 className='fw-bold'>Responsive Web Design</h3>
                    <p>Craft mobile-first websites that look great on any device.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default OurServices