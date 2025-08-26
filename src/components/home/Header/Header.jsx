import styles from './header.module.css'
import { DecryptText } from './DecryptText.jsx';

// Background Matrix Rain
var canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

var fontSize = 10,
  columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgb(16, 16, 16, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}
// Loop the animation
setInterval(draw, 33);

function Header() {
  return (
    <>
      <header className={`h-screen ${styles.header}`}>
        <div className={`header-content text-white text-center h-full flex flex-col justify-center p-4 lg:p-0 ${styles.headerContent}`}>
          <h1 className='font-bold uppercase lg:text-8xl text-5xl'>
            <DecryptText text="Get the Ultimate Web Experience" speed={50} />
          </h1>
          <h2 className='text-lg lg:text-2xl font-semibold'>With websites that exude <span className={`typewriter ${styles.typewriter}`}></span></h2>
        </div>
      </header>
    </>
  )
}
export default Header