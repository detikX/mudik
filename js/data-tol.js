// //pin data tol
// gsap.timeline({
//     scrollTrigger: {
//       trigger: ".box",
//       start: "center center",
//       end: "bottom top",
//       scrub: 1,
//       pin:true
//     }
//   })
//   .from(".text1", {
//     x: innerWidth * 1  
//   })
//   .from(".text2", {
//     x: innerWidth * -1  
//   })
//   .from(".text3", {
//     x: innerWidth * 1  
//   })
//   .from(".logo", {
//     y: innerHeight * 1,
//     rotate:360
//   })


//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".box2",
//       start: "center center",
//       end: "bottom top",
//       scrub: 1,
//       pin:true
//     }
//   })
//   .from(".box2", {
//     opacity: 0,
//   })
//   .from(".text4", {
//     y: innerHeight * 1,
//     stagger : {
//       amount : 0.5,
//     }
//   })

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 500, 2860, 20000);

const obj1 = document.getElementById("value1");
animateValue(obj1, 0, 70, 20000);

const obj2 = document.getElementById("value2");
animateValue(obj2, 0, 23, 20000);

const obj3 = document.getElementById("value3");
animateValue(obj3, 0, 58, 20000);