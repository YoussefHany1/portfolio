function OurServices() {

    return (
        <>
            <section className={`our-services -mt-24 px-3 mb-10 pt-6 lg:px-12 border-t border-gray-300/25`} id='services'>
                <h2 className='uppercase text-white text-3xl mt-5 font-bold mb-0 text-center md:text-start'>Our Services</h2>
                <div className="services flex flex-wrap p-5">
                    <div className={`box flex-1 text-white border-2 border-(--primary) lg:border-gray-300/25 duration-300 mx-4 p-6 text-center rounded-md mb-12 md:mb-0 hover:border-2 hover:border-(--primary) lg:hover:shadow-[0_0_20px_5px_var(--primary)] hover:shadow-none`}>
                        <lord-icon src="https://cdn.lordicon.com/jfwzwlls.json" trigger="loop" delay="500" colors="primary:#16c72e" style={{ width: "100px", height: "100px" }}></lord-icon>
                        <h3 className='font-bold'>Performance Optimization</h3>
                        <p className='font-sans text-gray-400'>Ensure websites are fast and efficient through code optimization and best practices.</p>
                    </div>
                    <div className={`box flex-1 text-white border-2 border-(--primary) lg:border-gray-300/25 duration-300 mx-4 p-6 text-center rounded-md mb-12 md:mb-0 hover:border-2 hover:border-(--primary) lg:hover:shadow-[0_0_20px_5px_var(--primary)] hover:shadow-none`}>
                        <lord-icon src="https://cdn.lordicon.com/trkmrggx.json" trigger="loop" delay="1000" colors="primary:#16c72e" style={{ width: "100px", height: "100px" }}></lord-icon>
                        <h3 className='font-bold'>API Integration</h3>
                        <p className='font-sans text-gray-400'>Connect front-end interfaces with back-end services and display data in engaging formats.</p>
                    </div>
                    <div className={`box flex-1 text-white border-2 border-(--primary) lg:border-gray-300/25 duration-300 mx-4 p-6 text-center rounded-md mb-12 md:mb-0 hover:border-2 hover:border-(--primary) lg:hover:shadow-[0_0_20px_5px_var(--primary)] hover:shadow-none`}>
                        <lord-icon src="https://cdn.lordicon.com/baxknfaw.json" trigger="loop" delay="1000" colors="primary:#16c72e" style={{ width: "100px", height: "100px" }}></lord-icon>
                        <h3 className='font-bold'>Responsive Web Design</h3>
                        <p className='font-sans text-gray-400'>Craft mobile-first websites that look great on any device.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OurServices