
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
.to('h1,p', {
  y: 130,
  delay: 1.5,
  duration: 1.4,
});


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


