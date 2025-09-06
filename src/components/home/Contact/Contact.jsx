import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import './contact.css'
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_d9fi5h5', 'template_379ze2i', form.current, {
                publicKey: 'JsYo5gWJhvJMfMTfm',
            })
            .then(
                () => {
                    Swal.fire({
                        title: 'successful!',
                        text: 'the email has been sent successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                },
                (error) => {
                    Swal.fire({
                        title: 'Error',
                        text: 'Message was not sent, please try again.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                    console.error('FAILED...', error.text);
                }
            );
    };

    return (
        <>
            <section className='contact px-4 lg:px-12 border-t border-gray-300/25' id='contact'>
                <h2 className='uppercase text-white text-3xl mt-12 font-bold text-center md:text-start'>Contact Me</h2>
                <div className="contact-content p-4 lg:p-12 lg:mx-5 flex flex-col lg:flex-row text-white items-center justify-between">
                    <form ref={form} onSubmit={sendEmail} className="glitch-input-wrapper flex flex-col gap-8 justify-center items-center pb-12 lg:p-12 w-full lg:pr-72">
                        <div className="name-input-container relative w-full">
                            <input
                                type="text"
                                name="name"
                                id="name-input"
                                className="holo-input w-full h-14 border-b-2 border-neutral-800 outline-none px-4 text-(--primary) text-lg transition-colors duration-300 ease-in-out focus:border-transparent"
                                placeholder=""
                            />
                            <label htmlFor="holo-input" className="input-label absolute top-4 left-4 text-[var(--text-color)] opacity-60 uppercase tracking-wider transition-all duration-300 ease-in-out" data-text="Name">
                                Name
                            </label>
                            <div className="input-border absolute top-0 left-0 w-full h-full pointer-events-none border border-(--primary)/25 opacity-50 transition-all duration-300 ease-in-out" />
                            <div className="input-scanline opacity-0 absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-(--primary) to-transparent" />
                            <div className="input-glow absolute top-0 left-0 opacity-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(22,199,46,0.3)_0%,transparent_70%)] transition-opacity duration-400 ease-in-out" />
                            <div className="input-data-stream absolute bottom-0.5 left-0 w-full h-1 flex opacity-0 transition-opacity duration-300 ease-in-out delay-100">
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 0 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 1 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 2 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 3 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 4 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 5 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 6 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 7 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 8 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 9 }} />
                            </div>
                            <div className="input-corners absolute top-0 left-0 w-full h-full pointer-events-none">
                                <div className="corner corner-tl absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -top-1 -left-1 !border-r-0 !border-b-0" />
                                <div className="corner corner-tr absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -top-1 -right-1 !border-l-0 !border-b-0" />
                                <div className="corner corner-bl absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -bottom-1 -left-1 !border-r-0 !border-t-0" />
                                <div className="corner corner-br absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -bottom-1 -right-1 !border-l-0 !border-t-0" />
                            </div>
                        </div>
                        <div className="email-input-container relative w-full">
                            <input
                                type="email"
                                name="email"
                                id="email-input"
                                className="holo-input w-full h-14 border-b-2 border-neutral-800 outline-none px-4 text-(--primary) text-lg transition-colors duration-300 ease-in-out focus:border-transparent"
                                placeholder=""
                            />
                            <label htmlFor="holo-input" className="input-label absolute top-4 left-4 text-[var(--text-color)] opacity-60 uppercase tracking-wider transition-all duration-300 ease-in-out" data-text="Email">
                                Email
                            </label>
                            <div className="input-border absolute top-0 left-0 w-full h-full pointer-events-none border border-(--primary)/25 opacity-50 transition-all duration-300 ease-in-out" />
                            <div className="input-scanline opacity-0 absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-(--primary) to-transparent" />
                            <div className="input-glow absolute top-0 left-0 opacity-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(22,199,46,0.3)_0%,transparent_70%)] transition-opacity duration-400 ease-in-out" />
                            <div className="input-data-stream absolute bottom-0.5 left-0 w-full h-1 flex opacity-0 transition-opacity duration-300 ease-in-out delay-100">
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 0 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 1 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 2 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 3 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 4 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 5 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 6 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 7 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 8 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 9 }} />
                            </div>
                            <div className="input-corners absolute top-0 left-0 w-full h-full pointer-events-none">
                                <div className="corner corner-tl absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -top-1 -left-1 !border-r-0 !border-b-0" />
                                <div className="corner corner-tr absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -top-1 -right-1 !border-l-0 !border-b-0" />
                                <div className="corner corner-bl absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -bottom-1 -left-1 !border-r-0 !border-t-0" />
                                <div className="corner corner-br absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -bottom-1 -right-1 !border-l-0 !border-t-0" />
                            </div>
                        </div>
                        <div className="message-input-container relative w-full">
                            <textarea
                                name="message"
                                id="message-input"
                                className="holo-input w-full border-b-2 border-neutral-800 outline-none px-4 text-(--primary) text-lg transition-colors duration-300 ease-in-out focus:border-transparent"
                                placeholder=""
                            />
                            <label htmlFor="holo-input" className="input-label absolute top-4 left-4 text-[var(--text-color)] opacity-60 uppercase tracking-wider transition-all duration-300 ease-in-out" data-text="Message">
                                Message
                            </label>
                            <div className="input-border absolute top-0 left-0 w-full h-full pointer-events-none border border-(--primary)/25 opacity-50 transition-all duration-300 ease-in-out" />
                            <div className="input-scanline opacity-0 absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-(--primary) to-transparent" />
                            <div className="input-glow absolute top-0 left-0 opacity-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(22,199,46,0.3)_0%,transparent_70%)] transition-opacity duration-400 ease-in-out" />
                            <div className="input-data-stream absolute bottom-0.5 left-0 w-full h-1 flex opacity-0 transition-opacity duration-300 ease-in-out delay-100">
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 0 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 1 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 2 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 3 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 4 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 5 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 6 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 7 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 8 }} />
                                <div className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom" style={{ "--i": 9 }} />
                            </div>
                            <div className="input-corners absolute top-0 left-0 w-full h-full pointer-events-none">
                                <div className="corner corner-tl absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -top-1 -left-1 !border-r-0 !border-b-0" />
                                <div className="corner corner-tr absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -top-1 -right-1 !border-l-0 !border-b-0" />
                                <div className="corner corner-bl absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -bottom-1 -left-1 !border-r-0 !border-t-0" />
                                <div className="corner corner-br absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -bottom-1 -right-1 !border-l-0 !border-t-0" />
                            </div>
                        </div>




                        <button type="submit" className='send mt-3 font-sans font-semibold flex items-center bg-[#cbcbcb1a] border border-gray-300/25 lg:duration-300 text-white rounded-md p-2 px-4 hover:border-(--primary) hover:[box-shadow:0_0_5px_var(--primary),_0_0_25px_var(--primary),_0_0_75px_var(--primary)]' >
                            <lord-icon
                                src="https://cdn.lordicon.com/vpbspaec.json"
                                trigger="loop"
                                delay="500"
                                colors="primary:#16c72e"
                                style={{ width: "35px", height: "35px", marginRight: "8px" }}>
                            </lord-icon>Send</button>
                    </form>
                    <div className="box flex flex-col items-center justify-between p-4 lg:p-12 rounded-md mb-12 lg:mb-0 bg-[#cbcbcb1a]">
                        <h3 className='text-center text-3xl'>More Info</h3>
                        <div className='social flex flex-wrap lg:flex-nowrap justify-center items-center py-12'>
                            <a href='https://linkedin.com/in/yh5' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/xerxcacw.json" trigger="hover" state="hover-draw" colors="primary:#16c72e,secondary:#232323,tertiary:#16c72e" style={{ width: "70px", height: "70px" }} className />
                            </a>
                            <a href='https://github.com/YoussefHany1' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="hover" colors="primary:#121331,secondary:#232323,tertiary:#16c72e" style={{ width: "70px", height: "70px" }} />
                            </a>
                            <a href='https://wa.me/qr/UET75FACE2XCH1' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/qtenrimd.json" trigger="hover" stroke="light" colors="primary:#121331,secondary:#16c72e,tertiary:#ebe6ef" style={{ width: "70px", height: "70px" }} />
                            </a>
                            <a href='https://www.instagram.com/y.hm10/' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/wgtaryar.json" trigger="morph" state="morph-circle" colors="primary:#16c72e,secondary:#16c72e,tertiary:#16c72e,quaternary:#232323" style={{ width: "70px", height: "70px" }} />
                            </a>
                            <a href='https://www.facebook.com/youssef.hany0' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/gnqwqcgx.json" trigger="morph" state="morph-circle" colors="primary:#121331,secondary:#16c72e,tertiary:#232323" style={{ width: "70px", height: "70px" }} />
                            </a>
                        </div>
                        <button type="button" className="download rounded-md p-4 font-sans border border-gray-300/25 lg:duration-300 hover:border-(--primary) hover:[box-shadow:0_0_5px_var(--primary),_0_0_25px_var(--primary),_0_0_75px_var(--primary)]">
                            <a href='https://drive.google.com/file/d/1p-dkLP_VNOLx5BYazsnrI8pHUaJA_oG8/view?usp=drive_link' target="_blank" className='text-white flex items-center font-semibold'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="loop"
                                    delay="1000"
                                    colors="primary:#fff,secondary:#16c72e"
                                    style={{ width: "40px", height: "40px", marginRight: "8px" }}>
                                </lord-icon>
                                View Resume</a>
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact