
// initial text animation
const headline = document.querySelector('h1');
const myText2 = document.querySelector('p');
const headlineSplit = new SplitType(headline);
const myText2Split = new SplitType(myText2, { charClass: 'char2' });
var tl = gsap.timeline({ defaults: { ease: "Expo.easeInOut" } });

tl.from('.char', {
  y: -100,
  stagger: 0.05,
  delay: 2
})
.from('.char2', {
  y: -100,
  stagger: 0.05,
  duration: .6
}, "-=1.2")
;

//blob follows the mouse
const blob = document.getElementById("blob");
document.body.onpointermove = event => { 
  const { clientX, clientY } = event;
  const { scrollTop, scrollLeft } = document.documentElement;
  const x = clientX + scrollLeft;
  const y = clientY + scrollTop;
  
  blob.animate({
    left: `${x}px`,
    top: `${y}px`
  }, { duration: 2000, fill: "forwards" });
}

//init annimation fades out after 7 seconds
const iframe = document.querySelector('iframe');
setTimeout(() => {
  iframe.style.transition = 'opacity 2s';
  iframe.style.opacity = '0';
}, 7000);

const downArrow = document.getElementById('downArrowId');
setTimeout(() => {
  downArrow.style.transition = 'opacity 2s';
  downArrow.style.opacity = '1';
}, 6000);




