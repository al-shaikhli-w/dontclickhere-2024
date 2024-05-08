// // set item has run on localStorage
// localStorage.setItem("run", "true");
// // get item from localStorage
// const run = localStorage.getItem("run");
// // check if run is true
// if (run === "true") {
//     // run the animation
//     gsap.to(".first", {
//         duration: 1.5,
//         delay: 0.8,
//         right: "-100%",
//         ease: "expo.inOut",
//     });

//     gsap.to(".second", {
//         duration: 1.5,
//         delay: 0.9,
//         right: "-100%",
//         ease: "expo.inOut",
//     });

//     gsap.to(".third", {
//         duration: 1.5,
//         delay: 1,
//         right: "-100%",
//         ease: "expo.inOut",
//     });
//     // remove the overflow from body
//     setTimeout(function () {
//         if (document.body.classList.contains("overflow-hidden")) {
//             document.body.classList.remove("overflow-hidden");
//             document.querySelector(".overlay").remove();
//         }
//     }, 2000);
//     localStorage.setItem("run", "false");
// }

// new Rellax('.logo-b-t', {
//     speed: -1,
//     center: true,
//     wrapper: null,
//     round: true,
//     vertical: true,
//     horizontal: false
// });