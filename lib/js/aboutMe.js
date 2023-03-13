//blob
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

//header Button
const headerButton = document.querySelector(".headerButton");
const navLinksContainer = document.querySelector("#links-container")
const navLinks = document.querySelector("#nav-links")
headerButton.addEventListener("click", () => { 
  navLinks.classList.toggle("open");
})


const continueButton = document.querySelector(".continueButton");
const appearingTextContainer = document.querySelector(".appearing-text-container");

continueButton.addEventListener("click", () => {
  appearingTextContainer.classList.toggle("visible");
  
});
