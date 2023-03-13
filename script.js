
// initial text animation
const headline = document.querySelector('h1');
const myText2 = document.querySelector('p');
const headlineSplit = new SplitType(headline);
const myText2Split = new SplitType(myText2, { charClass: 'char2' });
var tl = gsap.timeline({ defaults: { ease: "Expo.easeInOut" } });

tl.from('.char', {
  y: -100,
  stagger: 0.05,
  delay: 3,
  duration: 1.5
})
.from('.char2', {
  y: -100,
  stagger: 0.05,
  duration: 2
}, "-=1.2");

//blob follows the mouse
const blob = document.getElementById("blob");
document.body.onpointermove = event => { 
  const { clientX, clientY } = event;
  const x = clientX 
  const y = clientY 
  
  blob.animate({
    left: `${x}px`,
    top: `${y}px`
  }, { duration: 2000, fill: "forwards" });
}

//init annimation fades out after 7 seconds
async function animate() {
  const iframe = document.querySelector('iframe');
  const avatar = document.querySelector('#avatar')
  const menuButton = document.querySelector('.headerButton')

  await new Promise(resolve => setTimeout(resolve, 6000));
  iframe.style.transition = 'opacity 1s';
  iframe.style.opacity = '0';
//arrow and avatar comes into screen
  await new Promise(resolve => setTimeout(resolve, 1000));
  avatar.style.transition = 'opacity 1s';
  avatar.style.opacity = '1';
}
animate();

const headerButton = document.querySelector(".headerButton");
const navLinksContainer = document.querySelector("#links-container")
const navLinks = document.querySelector("#nav-links")
headerButton.addEventListener("click", () => { 
  navLinks.classList.toggle("open");
})






