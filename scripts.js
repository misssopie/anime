function setTheme(theme) {
    document.body.className = theme;
}

gsap.to(".circle", {
    duration: 2,
    rotation: 360,
    repeat: -1,
    ease: "linear"
});
