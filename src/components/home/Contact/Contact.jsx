import styles from './contact.module.css'
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
            <section className={`contact px-4 lg:px-12 border-t border-gray-300/25 ${styles.contact}`} id='contact'>
                <h2 className='uppercase text-white text-3xl mt-12 font-bold text-center md:text-start'>Contact Me</h2>
                <div className="contact-content p-4 lg:p-12 lg:mx-5 flex flex-col lg:flex-row text-white items-center justify-between">
                    <form ref={form} onSubmit={sendEmail} className={`form w-full text-center lg:mb-0 mb-12 lg:mr-5 lg:p-0 p-4 font-sans max-w-xl order-2 lg:order-none ${styles.form}`}>
                        <label hidden>Name</label>
                        <input type="text" name="name" placeholder='Name' className={`w-full outline-(--primary) bg-[#cbcbcb1a] p-2 mb-4 rounded-md border-0`} /><br />
                        <label hidden>Email</label>
                        <input type="email" name="email" placeholder='Email' className={`w-full outline-(--primary) bg-[#cbcbcb1a] p-2 mb-4 rounded-md border-0`} required /><br />
                        <label hidden>Message</label>
                        <textarea name="message" placeholder='Message' className={`w-full outline-(--primary) bg-[#cbcbcb1a] p-2 pb-5 mb-4 rounded-md border-0`} required /><br />
                        <input type="submit" value="Send" className={`send font-sans border border-gray-300/25 lg:duration-300 text-white rounded-md p-2 px-4 hover:[box-shadow:0_0_5px_var(--primary),_0_0_25px_var(--primary),_0_0_75px_var(--primary)]`} />
                    </form>
                    <div className={`box flex flex-col items-center justify-between lg:p-12 p-4 rounded-md lg:mb-0 mb-12 bg-[#cbcbcb1a]`}>
                        <h3 className='text-center text-3xl'>More Info</h3>
                        <div className={`social flex items-center py-12 ${styles.social}`}>
                            <a href='https://linkedin.com/in/yh5' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/xerxcacw.json" trigger="hover" state="hover-draw" colors="primary:#16c72e,secondary:#232323,tertiary:#16c72e" style={{ width: "70px", height: "70px" }} />
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
                        <button type="button" className={`download rounded-md p-4 font-sans border border-gray-300/25 lg:duration-300 hover:[box-shadow:0_0_5px_var(--primary),_0_0_25px_var(--primary),_0_0_75px_var(--primary)]`}><a href='https://drive.google.com/file/d/1p-dkLP_VNOLx5BYazsnrI8pHUaJA_oG8/view?usp=drive_link' target="_blank" className='text-white flex items-center'>
                            <svg viewBox="0 0 42 42" xmlSpace="preserve" className='w-8 mx-2'><path fill='currentColor' d="M15.3 20.1c0 3.1 2.6 5.7 5.7 5.7s5.7-2.6 5.7-5.7-2.6-5.7-5.7-5.7-5.7 2.6-5.7 5.7m8.1 12.3C30.1 30.9 40.5 22 40.5 22s-7.7-12-18-13.3c-.6-.1-2.6-.1-3-.1-10 1-18 13.7-18 13.7s8.7 8.6 17 9.9c.9.4 3.9.4 4.9.2M11.1 20.7c0-5.2 4.4-9.4 9.9-9.4s9.9 4.2 9.9 9.4S26.5 30 21 30s-9.9-4.2-9.9-9.3" /></svg>
                            View Resume</a>
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact