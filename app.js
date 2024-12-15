// Page One Animation
function pageOneAnimation() {
  var tl = gsap.timeline();
  // NAVBAR

  tl.from(["nav h1", "nav h4", "nav button"], {
    y: -40,
    opacity: 0,
    delay: 1,
    duration: 0.5, // All navbar elements animate in 0.5s
    stagger: 0.15,
  });

  // MAIN CONTENT

  tl.from(".center-part1", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(
    ".center-part2",
    {
      x: 100,
      opacity: 0,
      duration: 0.5,
    },
    "<"
  );

  // SECTION 1 IMAGES
  tl.from(".section1bottom img", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section1",
      scroller: "body",
      //markers: true,
      start: "bottom 90%",
      end: "bottom -20%",
      scrub: 2,
    },
  });
}

// PAGE TWO ANIMATION

function pageTwoAnimation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      //   markers: true,
      start: "top 60%",
      end: "top -60%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 40,
    opacity: 0,
  });

  // Line 1 Animation
  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      duration: 1,
      opacity: 0,
    },
    "anim1"
  );

  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      duration: 1,
      opacity: 0,
    },
    "anim1"
  );

  // Line 2 Animation

  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      duration: 1,
      opacity: 0,
    },
    "anim2"
  );

  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      duration: 1,
      opacity: 0,
    },
    "anim2"
  );
}

pageOneAnimation();
pageTwoAnimation();
