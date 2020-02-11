$(document).ready(function() {
  console.log("ready!");
});

var sadAnimation = bodymovin.loadAnimation({
  container: document.getElementById('sad'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: '../assets/sad.json'
})

$("#sad").on("mouseenter", function() {
  console.log("mouse enter");
  sadAnimation.play();
});


$("#sad").on("mouseleave", function() {
  console.log("mouse leave");
  sadAnimation.stop();
});

var neutralAnimation = bodymovin.loadAnimation({
  container: document.getElementById('neutral'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: '../assets/neutral.json'
})

$("#neutral").on("mouseenter", function() {
  console.log("mouse enter");
  neutralAnimation.play();
});

$("#neutral").on("mouseleave", function() {
  console.log("mouse leave");
  neutralAnimation.stop();
});

var happyAnimation = bodymovin.loadAnimation({
  container: document.getElementById('happy'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: '../assets/happy.json'
})

$("#happy").on("mouseenter", function() {
  console.log("mouse enter");
  happyAnimation.play();
});

$("#happy").on("mouseleave", function() {
  console.log("mouse leave");
  happyAnimation.stop();
});

$('#sad, #neutral, #happy').tilt({
  scale: 1.1
})

gsap.set('#emotions',{alpha:0})

function fadeIn() {
 gsap.to('#emotions',{duration: 1,alpha:1, delay:1})
 gsap.to('#typed-text',{duration: 1,alpha:0.25, delay:1.5})
}

var typed = new Typed('#typed', {
    strings: ["What's your mood?"],
    typeSpeed: 70,
    onComplete: fadeIn
  });
