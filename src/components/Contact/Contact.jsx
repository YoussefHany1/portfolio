import './contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
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
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
    return (
        <>
        <section className="contact px-3 px-lg-5" id='contact'>
            <h2 className='text-uppercase text-white mt-5 fw-bold text-center text-md-start mb-md-0 mb-5'>Contact Me</h2>
            <div className="contact-content grid p-3 mt-md-5 p-lg-5 mx-lg-5 d-flex flex-column flex-lg-row text-white align-items-center justify-content-between">
                <form ref={form} onSubmit={sendEmail} className='w-100 text-center mb-lg-0 mb-5 me-lg-5'>
                    <label hidden>Name</label>
                    <input type="text" name="name" placeholder='Name' className='w-100 p-2 mb-3 rounded-3' /><br />
                    <label hidden>Email</label>
                    <input type="email" name="email" placeholder='Email' className='w-100 p-2 mb-3 rounded-3' required /><br />
                    <label hidden>Message</label>
                    <textarea name="message" placeholder='Message' className='w-100 p-3 mb-3 rounded-3' required /><br />
                    <input type="submit" value="Send" className='send text-white rounded-3 p-2 px-3 btn btn-outline-success' />
                </form>
                <div className="box d-flex flex-column align-items-center justify-content-between p-lg-5 p-4 rounded-3">
                    <h3 className='text-center mb-0'>More Info</h3>
                    <div className="social d-flex align-items-center py-5">
                        <a href='https://linkedin.com/in/yh5' target='_blank'><svg
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" className='ms-0'>
                            <path
                            fill="#16c72e"
                            d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728zM4.67 5.715a1.037 1.037 0 0 1-1.032-1.031c0-.566.466-1.032 1.032-1.032s1.031.466 1.032 1.032c0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78zM13.11 2H2.885A.88.88 0 0 0 2 2.866v10.268a.88.88 0 0 0 .885.866h10.226a.88.88 0 0 0 .889-.866V2.865a.88.88 0 0 0-.889-.864z"
                            />
                        </svg></a>
                        <a href='https://wa.me/qr/UET75FACE2XCH1' target='_blank'><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 418.135 418.135"
                            xmlSpace="preserve"
                            className='whatsapp'>
                            <path
                            style={{
                                fill: "#16c72e",
                            }}
                            d="M198.929.242C88.5 5.5 1.356 97.466 1.691 208.02c.102 33.672 8.231 65.454 22.571 93.536L2.245 408.429c-1.191 5.781 4.023 10.843 9.766 9.483l104.723-24.811c26.905 13.402 57.125 21.143 89.108 21.631 112.869 1.724 206.982-87.897 210.5-200.724C420.113 93.065 320.295-5.538 198.929.242m124.957 321.955c-30.669 30.669-71.446 47.559-114.818 47.559-25.396 0-49.71-5.698-72.269-16.935l-14.584-7.265-64.206 15.212 13.515-65.607-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713 0-43.373 16.89-84.149 47.559-114.819 30.395-30.395 71.837-47.56 114.822-47.56 43.372.001 84.147 16.891 114.816 47.559 30.669 30.669 47.559 71.445 47.56 114.817-.001 42.986-17.166 84.428-47.561 114.822"
                            />
                            <path
                            style={{
                                fill: "#16c72e",
                            }}
                            d="m309.712 252.351-40.169-11.534a14.97 14.97 0 0 0-14.816 3.903l-9.823 10.008c-4.142 4.22-10.427 5.576-15.909 3.358-19.002-7.69-58.974-43.23-69.182-61.007-2.945-5.128-2.458-11.539 1.158-16.218l8.576-11.095a14.97 14.97 0 0 0 1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356-11.211 9.482-24.513 23.891-26.13 39.854-2.851 28.144 9.219 63.622 54.862 106.222 52.73 49.215 94.956 55.717 122.449 49.057 15.594-3.777 28.056-18.919 35.921-31.317 5.362-8.453 1.128-19.679-8.494-22.442"
                            />
                        </svg></a>
                        <a href='https://github.com/YoussefHany1' target='_blank'><svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1">
                            <path fill="#16c72e" d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
                        </svg></a>
                        <a href='https://www.instagram.com/youssef__hany_/' target='_blank'><svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1">
                            <path fill="#16c72e" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43 4.9 4.9 0 0 0-1.16-1.77 4.7 4.7 0 0 0-1.77-1.15 7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47 4.8 4.8 0 0 0-1.77 1.15 4.7 4.7 0 0 0-1.15 1.77 7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43 4.7 4.7 0 0 0 1.15 1.77 4.8 4.8 0 0 0 1.77 1.15 7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47 4.7 4.7 0 0 0 1.77-1.15 4.85 4.85 0 0 0 1.16-1.77 7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86 3.06 3.06 0 0 1-.75 1.15 3.2 3.2 0 0 1-1.15.75 5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3 3.3 3.3 0 0 1-1.1-.75 3 3 0 0 1-.74-1.15 5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34 3.06 3.06 0 0 1 1.19.8 3.1 3.1 0 0 1 .75 1.1 5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12 5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12 3.33 3.33 0 0 1 12 15.33" />
                        </svg></a>
                        <a href='https://www.facebook.com/youssef.hany0' target='_blank'><svg
                            viewBox="-6 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className='me-0'>
                            <path fill="#16c72e" d="M12.462.173v3.808h-2.265a2.11 2.11 0 0 0-1.675.521l.002-.002a2.37 2.37 0 0 0-.432 1.566v-.008 2.726h4.229l-.56 4.27H8.098V24H3.681V13.053H.001V8.784h3.68V5.639a5.56 5.56 0 0 1 1.502-4.162l-.003.003A5.42 5.42 0 0 1 9.185.002h-.013a24 24 0 0 1 3.406.185l-.117-.012z" />
                        </svg></a>
                    </div>
                    <button type="button" className='download rounded-3 btn btn-outline-success p-2'><a href='https://drive.google.com/uc?export=download&id=1XDS6f9-G5DR67CMaSpmAjAfuvMCPvQf2' className='text-decoration-none text-white'>
                    <svg
                        viewBox="-5 -5 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin"
                        className="jam jam-download ms-0">
                        <path fill="#ffffff" d="m8 6.641 1.121-1.12a1 1 0 0 1 1.415 1.413L7.707 9.763a.997.997 0 0 1-1.414 0L3.464 6.934A1 1 0 1 1 4.88 5.52L6 6.641V1a1 1 0 1 1 2 0zM1 12h12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2" />
                    </svg>Download Resume</a>
                    </button>
                
                </div>
            </div>
        </section>
        </>
    )
}
export default Contact