import './header.css'
import { DecryptText } from '../DecryptText.tsx';
function Header() {

  return (
    <>
        <header>
            <div className='header-content text-white text-center h-100 d-flex flex-column justify-content-center p-3 p-lg-0'>
                <h1 className='fw-bold text-uppercase'>
                  <DecryptText text="Get the Ultimate Web Experience" speed={50} />
                </h1>
                <h2>With websites that exude <span className='typewriter'> </span></h2>
            </div>
        </header>
    </>
  )
}

export default Header