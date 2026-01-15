import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./contact.css";

// Constants
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const SOCIAL_LINKS = [
  {
    id: "linkedin",
    url: "https://linkedin.com/in/yh5",
    icon: "/icons/linkedin.json",
    trigger: "hover",
  },
  {
    id: "github",
    url: "https://github.com/YoussefHany1",
    icon: "/icons/github2.json",
    trigger: "hover",
  },
  {
    id: "whatsapp",
    url: "https://wa.me/qr/UET75FACE2XCH1",
    icon: "/icons/whatsapp.json",
    trigger: "hover",
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/y.hm10/",
    icon: "/icons/instagram.json",
    trigger: "morph",
  },
  {
    id: "facebook",
    url: "https://www.facebook.com/youssef.hany0",
    icon: "/icons/facebook.json",
    trigger: "morph",
  },
];

const RESUME_LINK =
  "https://drive.google.com/file/d/1gNm6BgRLc4zwqN__mPMEvUJtYRLYlLx_/view?usp=sharing";

// Inputs Component
const HoloInput = ({ type = "text", name, id, label }) => {
  const streamBars = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div
      className={`${name}-input-container relative w-full ${
        type === "textarea" ? "h-25" : ""
      }`}
    >
      {type === "textarea" ? (
        <textarea
          name={name}
          id={id}
          className="holo-input h-25 w-full border-b-2 border-neutral-800 outline-none px-4 text-(--primary) text-lg transition-colors duration-300 ease-in-out focus:border-transparent"
          placeholder=""
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          className="holo-input w-full h-14 border-b-2 border-neutral-800 outline-none px-4 text-(--primary) text-lg transition-colors duration-300 ease-in-out focus:border-transparent"
          placeholder=""
          required
        />
      )}

      <label
        htmlFor={id}
        className="input-label absolute top-4 left-4 text-[var(--text-color)] opacity-60 uppercase tracking-wider transition-all duration-300 ease-in-out"
        data-text={label}
      >
        {label}
      </label>

      <div className="input-border absolute top-0 left-0 w-full h-full pointer-events-none border border-(--primary)/25 opacity-50 transition-all duration-300 ease-in-out" />
      <div className="input-scanline opacity-0 absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-(--primary) to-transparent" />
      <div className="input-glow absolute top-0 left-0 opacity-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(22,199,46,0.3)_0%,transparent_70%)] transition-opacity duration-400 ease-in-out" />

      <div className="input-data-stream absolute bottom-0.5 left-0 w-full h-1 flex opacity-0 transition-opacity duration-300 ease-in-out delay-100">
        {streamBars.map((i) => (
          <div
            key={i}
            className="stream-bar flex-grow bg-(--primary) duration-200 ease-in-out origin-bottom"
            style={{ "--i": i }}
          />
        ))}
      </div>

      <div className="input-corners absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="corner corner-tl absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -top-1 -left-1 !border-r-0 !border-b-0" />
        <div className="corner corner-tr absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -top-1 -right-1 !border-l-0 !border-b-0" />
        <div className="corner corner-bl absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -bottom-1 -left-1 !border-r-0 !border-t-0" />
        <div className="corner corner-br absolute w-4 h-4 border-2 border-(--primary) transition-all duration-300 ease-in-out opacity-50 -bottom-1 -right-1 !border-l-0 !border-t-0" />
      </div>
    </div>
  );
};

const SocialIcon = ({ link }) => (
  <div
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={link.id}
  >
    <lord-icon
      src={link.icon}
      trigger={link.trigger}
      style={{ width: "70px", height: "70px" }}
    />
  </div>
);

const SubmitButton = ({ isSubmitting }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="send mt-3 font-sans font-semibold cursor-pointer flex items-center bg-[#cbcbcb1a] border border-gray-300/25 lg:duration-300 text-white rounded-md p-2 px-4 hover:border-(--primary) hover:[box-shadow:0_0_5px_var(--primary),_0_0_25px_var(--primary),_0_0_75px_var(--primary)] disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <lord-icon
      src="/icons/send.json"
      trigger="loop"
      style={{ width: "35px", height: "35px", marginRight: "8px" }}
    />
    {isSubmitting ? "Sending..." : "Send"}
  </button>
);

const MoreInfoSection = () => (
  <div className="box flex flex-col items-center justify-between p-4 lg:p-12 rounded-md mb-12 lg:mb-0 bg-[#cbcbcb1a]">
    <h3 className="text-center text-3xl">More Info</h3>

    <div className="social flex flex-wrap lg:flex-nowrap justify-center items-center py-12">
      {SOCIAL_LINKS.map((link) => (
        <SocialIcon key={link.id} link={link} />
      ))}
    </div>

    <a
      href={RESUME_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="download rounded-md px-4 py-1 font-sans border border-gray-300/25 lg:duration-300 hover:border-(--primary) hover:[box-shadow:0_0_5px_var(--primary),_0_0_25px_var(--primary),_0_0_75px_var(--primary)] text-white flex items-center font-semibold"
    >
      <lord-icon
        src="/icons/view.json"
        trigger="loop"
        delay="1000"
        style={{ width: "50px", height: "50px", marginRight: "8px" }}
      />
      View Resume
    </a>
  </div>
);

// Main Component
function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        { publicKey: EMAILJS_CONFIG.publicKey }
      );

      await Swal.fire({
        title: "Successful!",
        text: "The email has been sent successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      formRef.current.reset();
    } catch (error) {
      await Swal.fire({
        title: "Error",
        text: "Message was not sent, please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="contact px-4 lg:px-12 border-t border-gray-300/25"
      id="contact"
    >
      <h2 className="uppercase text-white text-3xl mt-12 font-bold text-center md:text-start">
        Contact Me
      </h2>

      <div className="contact-content p-4 lg:p-12 lg:mx-5 flex flex-col lg:flex-row text-white items-center justify-between">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glitch-input-wrapper flex flex-col gap-8 justify-center items-center pb-12 lg:p-12 w-full lg:pr-72"
        >
          <HoloInput type="text" name="name" id="name-input" label="Name" />
          <HoloInput type="email" name="email" id="email-input" label="Email" />
          <HoloInput
            type="textarea"
            name="message"
            id="message-input"
            label="Message"
          />
          <SubmitButton isSubmitting={isSubmitting} />
        </form>

        <MoreInfoSection />
      </div>
    </section>
  );
}

export default Contact;
