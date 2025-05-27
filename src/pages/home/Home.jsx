// import React, { Suspense } from 'react';
import Header from '../../components/Header/Header.jsx'
import OurServices from '../../components/OurServices/OurServices.jsx'
import Skills from '../../components/Skills/Skills.jsx'
import Projects from '../../components/Projects/Projects.jsx'
import Contact from '../../components/Contact/Contact.jsx'
import './home.css'

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
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
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


// const OurServices = React.lazy(() => import('../components/OurServices/OurServices.jsx'));
function Home() {
    return (
      <>
      <Header />
      <OurServices />
      <Skills />
      <Projects />
      <Contact />
      </>
    )
  }
export default Home