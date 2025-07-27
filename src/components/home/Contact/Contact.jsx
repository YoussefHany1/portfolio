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
            <section className={`contact px-3 px-lg-5 ${styles.contact}`} id='contact'>
                <h2 className='text-uppercase text-white mt-5 fw-bold text-center text-md-start mb-md-0 mb-5'>Contact Me</h2>
                <div className="contact-content grid p-3 mt-md-5 p-lg-5 mx-lg-5 d-flex flex-column flex-lg-row text-white align-items-center justify-content-between">
                    <form ref={form} onSubmit={sendEmail} className={`form w-100 text-center mb-lg-0 mb-5 me-lg-5 p-lg-0 p-4 ${styles.form}`}>
                        <label hidden>Name</label>
                        <input type="text" name="name" placeholder='Name' className={`w-100 p-2 mb-3 rounded-3 border-0 ${styles.input}`} /><br />
                        <label hidden>Email</label>
                        <input type="email" name="email" placeholder='Email' className={`w-100 p-2 mb-3 rounded-3 border-0 ${styles.input}`} required /><br />
                        <label hidden>Message</label>
                        <textarea name="message" placeholder='Message' className={`w-100 p-2 pb-5 mb-4 rounded-3 border-0 ${styles.input}`} required /><br />
                        <input type="submit" value="Send" className={`send text-white rounded-3 p-2 px-3 btn ${styles.btn}`} />
                    </form>
                    <div className={`box d-flex flex-column align-items-center justify-content-between p-lg-5 p-4 rounded-3 mb-lg-0 mb-5 ${styles.box}`}>
                        <h3 className='text-center mb-0'>More Info</h3>
                        <div className={`social d-flex align-items-center py-5 ${styles.social}`}>
                            <a href='https://linkedin.com/in/yh5' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/xerxcacw.json" trigger="hover" state="hover-draw" colors="primary:#16c72e,secondary:#232323,tertiary:#16c72e" style={{ width: "70px", height: "70px" }}></lord-icon>
                            </a>
                            <a href='https://github.com/YoussefHany1' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/lllcnxva.json" trigger="hover" colors="primary:#121331,secondary:#232323,tertiary:#16c72e" style={{ width: "70px", height: "70px" }}></lord-icon>
                            </a>
                            <a href='https://wa.me/qr/UET75FACE2XCH1' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/qtenrimd.json" trigger="hover" stroke="light" colors="primary:#121331,secondary:#16c72e,tertiary:#ebe6ef" style={{ width: "70px", height: "70px" }}></lord-icon>
                            </a>
                            <a href='https://www.instagram.com/youssef__hany_/' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/wgtaryar.json" trigger="morph" state="morph-circle" colors="primary:#16c72e,secondary:#16c72e,tertiary:#16c72e,quaternary:#232323" style={{ width: "70px", height: "70px" }}> </lord-icon>
                            </a>
                            <a href='https://www.facebook.com/youssef.hany0' target='_blank'>
                                <lord-icon src="https://cdn.lordicon.com/gnqwqcgx.json" trigger="morph" state="morph-circle" colors="primary:#121331,secondary:#16c72e,tertiary:#232323" style={{ width: "70px", height: "70px" }}></lord-icon>
                            </a>
                        </div>
                        <button type="button" className={`download rounded-3 btn  p-2 ${styles.btn}`}><a href='https://drive.google.com/file/d/1p-dkLP_VNOLx5BYazsnrI8pHUaJA_oG8/view?usp=drive_link' target="_blank" className='text-decoration-none text-white'>
                            <svg viewBox="0 0 42 42" xmlSpace="preserve"><path fill='currentColor' d="M15.3 20.1c0 3.1 2.6 5.7 5.7 5.7s5.7-2.6 5.7-5.7-2.6-5.7-5.7-5.7-5.7 2.6-5.7 5.7m8.1 12.3C30.1 30.9 40.5 22 40.5 22s-7.7-12-18-13.3c-.6-.1-2.6-.1-3-.1-10 1-18 13.7-18 13.7s8.7 8.6 17 9.9c.9.4 3.9.4 4.9.2M11.1 20.7c0-5.2 4.4-9.4 9.9-9.4s9.9 4.2 9.9 9.4S26.5 30 21 30s-9.9-4.2-9.9-9.3" /></svg>
                            View Resume</a>
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact