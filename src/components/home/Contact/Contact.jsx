import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
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
                    <form ref={form} onSubmit={sendEmail} className='form flex flex-col items-center w-full text-center lg:mb-0 mb-12 lg:mr-5 lg:p-0 p-4 font-sans max-w-xl order-2 lg:order-none'>
                        <label hidden>Name</label>
                        <input type="text" name="name" placeholder='Name' className='w-full outline-(--primary) bg-[#cbcbcb1a] p-2 mb-4 rounded-md border-0' />
                        <label hidden>Email</label>
                        <input type="email" name="email" placeholder='Email' className='w-full outline-(--primary) bg-[#cbcbcb1a] p-2 mb-4 rounded-md border-0' required />
                        <label hidden>Message</label>
                        <textarea name="message" placeholder='Message' className='w-full outline-(--primary) bg-[#cbcbcb1a] p-2 pb-5 mb-4 rounded-md border-none' required />
                        <button type="submit" className='send mt-3 font-sans font-semibold flex items-center bg-[#cbcbcb1a] border border-gray-300/25 lg:duration-300 text-white rounded-md p-2 px-4 hover:[box-shadow:0_0_5px_var(--primary),_0_0_25px_var(--primary),_0_0_75px_var(--primary)]' >
                            <lord-icon
                                src="https://cdn.lordicon.com/vpbspaec.json"
                                trigger="loop"
                                delay="500"
                                colors="primary:#16c72e"
                                style={{ width: "35px", height: "35px", marginRight: "8px" }}>
                            </lord-icon>Send</button>
                    </form>
                    <div className={`box flex flex-col items-center justify-between lg:p-12 p-4 rounded-md lg:mb-0 mb-12 bg-[#cbcbcb1a]`}>
                        <h3 className='text-center text-3xl'>More Info</h3>
                        <div className='social flex flex-wrap justify-center items-center py-12'>
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
                        <button type="button" className={`download rounded-md p-4 font-sans border border-gray-300/25 lg:duration-300 hover:[box-shadow:0_0_5px_var(--primary),_0_0_25px_var(--primary),_0_0_75px_var(--primary)]`}>
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