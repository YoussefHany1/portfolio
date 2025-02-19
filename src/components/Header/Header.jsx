import './header.css'
// import { DecryptedText } from 'react-bits';
function Header() {


  return (
    <>
        <header>
            <div className='header-content text-white text-center h-100 d-flex flex-column justify-content-center p-3 p-lg-0'>
                <h1 className='fw-bold text-uppercase'>Get the Ultimate Web Experience</h1>
                {/* <DecryptedText text="Hover me!" /> */}
                <h2 className=''>With websites that exude <span className='typewriter'> </span></h2>
            </div>
        </header>
    </>
  )
}

export default Header