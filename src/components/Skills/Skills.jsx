import './skills.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
function Skills() {
    return (
    <>
    <section className='skills py-3 mb-5'>
      <h2 className='text-uppercase text-white mt-5 fw-bold mb-0 ps-sm-3 ps-lg-5 pb-5 text-center text-md-start'>Skills</h2>
      <div className="skills-content d-flex align-items-center overflow-hidden py-3">
      <Splide
          options={{
            type: 'loop',
            gap: '1rem',
            drag: 'free',
            arrows: false,
            pagination: false,
            perPage: 3,
            autoScroll: {
              speed: 2,
              pauseOnHover: false,
            },
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              }
            }
          }}
          extensions={{ AutoScroll }}
          >
        <SplideSlide className="skill-box d-flex justify-content-center p-4">
          <svg
            width={800}
            height={800}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg">
            <path
              style={{
                fill: "#e44f26",
              }}
              d="M5.902 27.201 3.655 2h24.69l-2.25 25.197L15.985 30z"
            />
            <path
              style={{
                fill: "#f1662a",
              }}
              d="m16 27.858 8.17-2.265 1.922-21.532H16z"
            />
            <path
              style={{
                fill: "#ebebeb",
              }}
              d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16zm0 8.027-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004z"
            />
            <path
              style={{
                fill: "#fff",
              }}
              d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83zm0-6.256v3.091h7.466l.062-.694.141-1.567.074-.83z"
            />
          </svg>
          <p className='text-uppercase text-white fw-bold fs-2 ms-3 mb-0'>HTML</p>
        </SplideSlide>
        <SplideSlide className="skill-box d-flex justify-content-center p-4">
          <svg
            width={800}
            height={800}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg">
            <path
              style={{
                fill: "#1572b6",
              }}
              d="M5.902 27.201 3.656 2h24.688l-2.249 25.197L15.985 30z"
            />
            <path
              style={{
                fill: "#33a9dc",
              }}
              d="m16 27.858 8.17-2.265 1.922-21.532H16z"
            />
            <path
              style={{
                fill: "#fff",
              }}
              d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16z"
            />
            <path
              style={{
                fill: "#ebebeb",
              }}
              d="m16.019 21.218-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004z"
            />
            <path
              style={{
                fill: "#fff",
              }}
              d="m19.827 16.151-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007z"
            />
            <path
              style={{
                fill: "#ebebeb",
              }}
              d="M16.011 6.935v3.091H8.545l-.062-.695-.141-1.567-.074-.829zM16 13.191v3.091h-3.399l-.062-.695-.14-1.567-.074-.829z"
            />
          </svg>
          <p className='text-uppercase text-white fw-bold fs-2 ms-3 mb-0'>CSS</p>
        </SplideSlide>
        <SplideSlide className="skill-box d-flex justify-content-center p-4">
          <svg
            width="256px"
            height="256px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid">
            <g>
              <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E" />
              <path
                d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                fill="#000000"
              />
              <path
                d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                fill="#000000"
              />
            </g>
          </svg>
          <p className='text-uppercase text-white fw-bold fs-2 ms-3 mb-0'>JavaScript</p>
        </SplideSlide>
        <SplideSlide className="skill-box d-flex justify-content-center p-4">
          <svg
          width={256}
          height={256}
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid">
          <path fill="#007ACC" d="M0 128v128h256V0H0z" />
          <path
            d="m56.611 128.85-.081 10.483h33.32v94.68h23.569v-94.68h33.32v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.742c6.501 1.626 11.459 4.51 16.01 9.224 2.357 2.52 5.851 7.112 6.136 8.209.08.325-11.053 7.802-17.798 11.987-.244.163-1.22-.894-2.317-2.52-3.291-4.794-6.745-6.867-12.028-7.232-7.76-.529-12.759 3.535-12.718 10.32 0 1.992.284 3.17 1.097 4.796 1.707 3.535 4.876 5.648 14.832 9.955 18.326 7.884 26.168 13.085 31.045 20.48 5.445 8.25 6.664 21.415 2.966 31.208-4.063 10.646-14.14 17.88-28.323 20.277-4.388.772-14.79.65-19.504-.203-10.28-1.829-20.033-6.908-26.047-13.572-2.357-2.601-6.949-9.387-6.664-9.875.122-.162 1.178-.812 2.356-1.503 1.138-.65 5.446-3.13 9.509-5.486l7.355-4.267 1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305 8.167 4.308 19.383 3.698 24.909-1.26 2.357-2.153 3.332-4.388 3.332-7.68 0-2.966-.366-4.266-1.91-6.5-1.99-2.845-6.054-5.243-17.595-10.24-13.206-5.69-18.895-9.225-24.096-14.833-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.616-1.22-12.678-.447-16.335 2.723-12.76 12.353-21.658 26.25-24.3 4.51-.853 14.994-.528 19.424.57"
            fill="#FFF"
          />
          </svg>
          <p className='text-uppercase text-white fw-bold fs-2 ms-3 mb-0'>TypeScript</p>
        </SplideSlide>
        <SplideSlide className="skill-box d-flex justify-content-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 408">
            <defs>
              <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                x1={76}
                y1={10}
                x2={523}
                y2={365}
              >
                <stop offset={0} stopColor="#9013FE" />
                <stop offset={1} stopColor="#6610F2" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a)"
              fillRule="nonzero"
              d="M56.48 53.32C55.52 25.58 77.13 0 106.34 0H405.7c29.21 0 50.82 25.58 49.86 53.32-.93 26.65.27 61.16 8.96 89.31 8.72 28.23 23.41 46.08 47.48 48.37v26c-24.07 2.29-38.76 20.14-47.48 48.37-8.69 28.15-9.89 62.66-8.96 89.31.96 27.74-20.65 53.32-49.86 53.32H106.34c-29.21 0-50.82-25.58-49.86-53.32.93-26.65-.28-61.16-8.96-89.31C38.8 237.14 24.07 219.29 0 217v-26c24.07-2.29 38.8-20.14 47.52-48.37 8.68-28.15 9.89-62.66 8.96-89.31"
            />
            <path
              fill="#fff"
              d="M342.9 251.1c0 38.2-28.5 61.36-75.8 61.36h-89.2v-217h88.74c39.44 0 65.32 21.35 65.32 54.13 0 23.01-17.4 43.62-39.59 47.22v1.21c30.2 3.31 50.53 24.21 50.53 53.08m-130.49 33.84v-71.43h45.6c32.66 0 49.61 12.03 49.61 35.49s-16.48 35.94-47.6 35.94zm0-161.96h45.91c24.96 0 39.13 11.13 39.13 31.28 0 21.5-16.48 33.53-46.37 33.53h-38.67z"
            />
          </svg>
          <p className='text-uppercase text-white fw-bold fs-2 ms-3 mb-0'>Bootstrap</p>
        </SplideSlide>
        <SplideSlide className="skill-box d-flex justify-content-center p-4">
          <svg
            width={800}
            height={800}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.679 15.976c0-1.435-1.2-2.597-2.679-2.597-1.48 0-2.679 1.162-2.679 2.597 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597"
              fill="#53C1DE"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822m-.284 8.513a29 29 0 0 0-1.519-3.685 29 29 0 0 0 1.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691m-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29 29 0 0 0 2.514-3.096 31 31 0 0 0 4.064-.607c.407 1.595 1.194 5.298-.676 6.348m-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278a31 31 0 0 0 4.042.568 31 31 0 0 0 2.576 3.085c-1.083 1.015-4.163 3.671-6.034 2.625M2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29 29 0 0 0 1.462 3.673 30 30 0 0 0-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756M9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a30 30 0 0 0-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326m11.275 7.073c.957.117 1.875.273 2.736.464a26 26 0 0 1-.96 2.504 41 41 0 0 0-1.776-2.968m-4.365-3.529a27 27 0 0 1 1.766 2.066 39 39 0 0 0-3.546 0 28 28 0 0 1 1.78-2.066m-6.157 6.496a27 27 0 0 1-.954-2.517 30 30 0 0 1 2.72-.452 36 36 0 0 0-1.766 2.97m1.793 5.922a28 28 0 0 1-2.764-.431c.264-.83.59-1.692.972-2.568a36 36 0 0 0 1.792 2.999m4.4 3.525a28 28 0 0 1-1.805-2.094q1.783.069 3.566-.006a27 27 0 0 1-1.761 2.1m6.117-6.569c.4.886.739 1.744 1.007 2.559a28 28 0 0 1-2.798.462 41 41 0 0 0 1.79-3.02m-3.42 3.172a41.5 41.5 0 0 1-5.463.01 35 35 0 0 1-2.746-4.598 35 35 0 0 1 2.73-4.59 37.4 37.4 0 0 1 5.469 0 39 39 0 0 1 2.739 4.572 39 39 0 0 1-2.729 4.606M22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a32 32 0 0 0-4.012-.615 29 29 0 0 0-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692"
              fill="#53C1DE"
            />
          </svg>
          <p className='text-uppercase text-white fw-bold fs-2 ms-3 mb-0'>React</p>
        </SplideSlide>
        <SplideSlide className='skill-box d-flex justify-content-center p-4'>
          <svg
            width={800}
            height={800}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.472 14.753 17.247 2.528a1.8 1.8 0 0 0-2.55 0l-2.539 2.539 3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172L2.528 14.7a1.8 1.8 0 0 0 0 2.551l12.225 12.221a1.8 1.8 0 0 0 2.55 0L29.472 17.3a1.8 1.8 0 0 0 0-2.551"
              style={{
                fill: "#dd4c35",
              }}
            />
            <path
              d="m12.158 5.067 3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172"
              style={{
                fill: "#fff",
              }}
            />
          </svg>
          <p className='text-uppercase text-white fw-bold fs-2 ms-3 mb-0'>Git</p>
        </SplideSlide>
      </Splide>
      </div>
    </section>
    </>
    )
}
export default Skills