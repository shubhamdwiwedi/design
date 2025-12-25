window.addEventListener("wheel", function(dets) {
    if (dets.deltaY > 0) {
        gsap.to(".design", {
            transform: 'translateX(-100%)',
            repeat: -1,
            duration: 20,
            // yoyo: true,
            ease: "none"
        });
        gsap.to(".design img",{
         rotate: 180
      });
    } else {
        gsap.to(".design", {
            transform: 'translateX(100%)',
            repeat: -1,
            duration: 20,
            // yoyo: true,
            ease: "none"
        });
        gsap.to(".design img",{
         rotate: 0
      });
    }
});

